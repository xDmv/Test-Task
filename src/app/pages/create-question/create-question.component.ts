import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/interfaces/question';
import { Answers } from '../../shared/interfaces/answers';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateAppService } from '../../servises/state-app.service';
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
      answers: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.addAnswer();
    this.storage.init();
  }

  ngAfterContentInit() {
    this.storage.init();
  }

  public addAnswer(answer: string = '') {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.push(this.formBuilder.group({
      answer: [answer, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      isChoice: false
    }))
  }

  public saveQuestion() {
    const arrayAnswer: Answers[] = [];
    this.formQuestion.markAllAsTouched();
    this.formQuestion.controls['answers'].value.map(
      (value: Answers) => {
        arrayAnswer.push({
          answer: value.answer,
          isChoice: false
        })
      }
    );
    this.question = {
      id: Date.now(),
      title: this.formQuestion.controls['title'].value,
      type: this.formQuestion.controls['typeQuestion'].value,
      isRead: false,
      createDate: new Date().toString(),
      answerDate: '',
      answers: this.formQuestion.controls['answers'].value
    };
    if (this.formQuestion.controls['typeQuestion'].value === 'open') {
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
    }
    this.storage.setQuestion(this.question);
    this.route.navigateByUrl('/questions-management').then();
  }

  public deleteAnswer(i: number) {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.removeAt(i);
  }

  public choiceType(value: string) {
    this.formQuestion.controls['typeQuestion'].setValue(value);
  }
}
