import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/interfaces/question';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { StateAppService } from '../../services/state-app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  public question!: Question;
  public formQuestion!: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public storage: StateAppService,
    private route: Router
  ) {
    this.formQuestion = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      typeQuestion: ['single', [Validators.required]],
      answers: this.formBuilder.array([], [Validators.required, Validators.minLength(2)] )
    });
  }

  ngOnInit(): void {
    this.addAnswer();
    this.storage.init();
  }

  ngAfterContentInit() {
    this.storage.init();
  }

  get answers(): FormArray {
    return this.formQuestion.get('answers') as FormArray;
  }

  public addAnswer() {
    this.answers.push(this.formBuilder.group({
      answer: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      isChoice: false
    }))
  }

  public deleteAnswer(i: number) {
    this.answers.removeAt(i);
  }

  public choiceType(value: string) {
    this.formQuestion.controls['typeQuestion'].setValue(value);
  }

  public saveQuestion() {
    this.formQuestion.markAllAsTouched();
    if (!this.formQuestion.controls['title'].value) {
      return;
    }
    this.question = {
      id: Date.now(),
      title: this.formQuestion.controls['title'].value,
      type: this.formQuestion.controls['typeQuestion'].value,
      isRead: false,
      createDate: new Date().toString(),
      answerDate: '',
      answers: [
        {
          answer: '',
          isChoice: false
        }
      ]
    };
    if (this.formQuestion.controls['typeQuestion'].value === 'open') {
      this.saveResult();
    }
    if (this.formQuestion.valid) {
      this.question = {
        ...this.question,
        answers: this.formQuestion.controls['answers'].value
      };
      this.saveResult();
    }
  }

  private saveResult() {
    this.storage.setQuestion(this.question);
    this.route.navigateByUrl('/questions-management').then();
  }
}
