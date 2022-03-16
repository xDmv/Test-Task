import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../../shared/interfaces/question';
import { StateAppService } from '../../services/state-app.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answers } from '../../shared/interfaces/answers';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  public question!: Question;
  public formQuestion!: FormGroup;
  public isValid = false;

  constructor(
    public formBuilder : FormBuilder,
    private route: Router,
    private activateRoute: ActivatedRoute,
    public storage: StateAppService
    ) {}

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.storage.init();
    this.init();
  }
  public init() {
    let id = Number(this.activateRoute.snapshot.params['id']);
    this.question = this.storage.editQuestion(id);
    this.formQuestion = this.formBuilder.group({
      title: [this.question.title, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      typeQuestion: [this.question.type, [Validators.required]],
      answers: this.formBuilder.array([])
    });
    this.choiceType(this.question.type);
    if (this.question.type !== 'open') {
      let item: FormArray = this.formQuestion.get('answers') as FormArray;
      this.question.answers.map(
        (value) => {
          item.push(this.formBuilder.group({
            answer: [value.answer, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
            isChoice: value.isChoice
          }))
        }
      );
    }
  }

  public choiceType(value: string) {
    this.formQuestion.controls['typeQuestion'].setValue(value);
  }

  public addAnswer(answer: string = '') {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.push(this.formBuilder.group({
      answer: [answer, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      isChoice: false
    }))
  }

  public deleteAnswer(i: number) {
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.removeAt(i);
  }

  public saveQuestion() {
    this.formQuestion.markAllAsTouched();
    if (!this.formQuestion.controls['title'].value) {
      return;
    }
    this.validation(this.formQuestion.controls['typeQuestion'].value);
    if (this.formQuestion.controls['typeQuestion'].value === 'open') {
      this.saveResult({
        id: this.question.id,
        title: this.formQuestion.controls['title'].value,
        type: this.formQuestion.controls['typeQuestion'].value,
        isRead: false,
        createDate: this.question.createDate,
        answerDate: '',
        answers: [
          {
            answer: '',
            isChoice: false
          }
        ]
      });
    }
    if (this.isValid) {
      this.saveResult({
        id: this.question.id,
        title: this.formQuestion.controls['title'].value,
        type: this.formQuestion.controls['typeQuestion'].value,
        isRead: false,
        createDate: this.question.createDate,
        answerDate: '',
        answers: this.formQuestion.controls['answers'].value
      });
    }
  }

  public validation(type: string) {
    let array = this.formQuestion.controls['answers'].value;
    let isTrue = 0;
    array.map(
      (val: Answers) => {
        if (val.answer !== '') {
          isTrue = isTrue + 1;
        }
      }
    );
    const result = array.length + 1;
    if (type === 'single') {
      if (array.length >= 2) {
        isTrue = isTrue + 1;
      }
      if (isTrue === result ) {
        this.isValid = true;
      }
    }
    if (type === 'multiple') {
      if (array.length >= 3) {
        isTrue = array.length + 1;
      }
      if (isTrue === result ) {
        this.isValid = true;
      }
    }
  }

  private saveResult(value: Question) {
    this.storage.setQuestion(value);
    this.route.navigateByUrl('/questions-management').then();
  }
}
