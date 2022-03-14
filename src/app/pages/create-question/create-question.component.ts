import { Component, OnInit } from '@angular/core';
import { Question } from "../../share/interfaces/question";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Answers } from '../../share/interfaces/answers';
import { StateAppService } from '../../servises/state-app.service';
import * as dayjs from 'dayjs'


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
    public storage: StateAppService
  ) {
    this.formQuestion = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
      typeQuestion: ['single', [Validators.required]],
      answers: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.addAnswer();
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
      title: this.formQuestion.controls['title'].value,
      type: this.formQuestion.controls['typeQuestion'].value,
      isRead: false,
      createDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      answers: this.formQuestion.controls['answers'].value
    };
    if (this.formQuestion.controls['typeQuestion'].value === 'open') {
      this.question = {
        title: this.formQuestion.controls['title'].value,
        type: this.formQuestion.controls['typeQuestion'].value,
        isRead: false,
        createDate: dayjs().format('YYYY-MM-DD HH:mm:ss') ,
        answers: [
          {
            answer: '',
            isChoice: false
          }
        ]
      };
    }
    console.log('question: ', this.question);
    this.storage.setQuestion(this.question);
  }

  public deleteAnswer(i: number) {
    console.log('delete answer: ', i);
    let item: FormArray = this.formQuestion.get('answers') as FormArray;
    item.removeAt(i);
  }

  public choiceType(value: string) {
    this.formQuestion.controls['typeQuestion'].setValue(value);
  }
}
