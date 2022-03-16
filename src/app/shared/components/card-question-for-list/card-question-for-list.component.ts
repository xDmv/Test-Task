import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Question } from '../../interfaces/question';
import { Answers } from '../../interfaces/answers';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-question-for-list',
  templateUrl: './card-question-for-list.component.html',
  styleUrls: ['./card-question-for-list.component.scss']
})
export class CardQuestionForListComponent implements OnInit {
  @Input() question!: Question;

  @Output() pushResult: EventEmitter<Question> = new EventEmitter<Question>();

  public formQuestion!: FormGroup;
  public formQuestionSingle!: FormGroup;
  public isValid = true;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.init();
  }

  public init() {
    if (this.question) {
      if (this.question.type === 'open') {
        this.formQuestion = this.formBuilder.group({
          answer: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
          isChoice: true
        });
      }
      if (this.question.type === 'multiple') {
        this.formQuestionSingle = this.formBuilder.group({
          answers: this.formBuilder.array([])
        });
        let item: FormArray = this.formQuestionSingle.get('answers') as FormArray;
        this.question.answers.forEach(
          (value: Answers) => {
            item.push(
              this.formBuilder.group({
                answer: [value.answer],
                isChoice: [false]
              })
            );
          }
        );
      }
      if (this.question.type === 'single') {
        this.formQuestionSingle = this.formBuilder.group({
          index: [null]
        });
      }
    }
  }

  public validation(type: string) {
    if (type === 'single') {
      if (this.formQuestionSingle.value.index === null) {
        this.isValid = false;
        return;
      }
      this.isValid = true;
    }
    if (type === 'multiple') {
      let arrayAnswers = this.formQuestionSingle.value['answers'];
      this.isValid = false;
      arrayAnswers.map(
        (item: Answers) => {
          if (item.isChoice) {
            this.isValid = true;
            return;
          }
        }
      );
    }
  }

  public saveResultAnswer(type: string) {
    if (type === 'open') {
      this.formQuestion.markAllAsTouched();
      if (this.formQuestion.valid) {
        let json: Question = {
          ...this.question,
          isRead: true,
          answerDate: new Date().toString(),
          answers: [
            {
              answer: this.formQuestion.controls['answer'].value,
              isChoice: true
            }
          ]
        };
        return this.pushResult.next(json);
      }
    }
    this.formQuestionSingle.markAllAsTouched();
    this.validation(type);
    if (this.isValid) {
      if (type === 'single') {
        const index = this.formQuestionSingle.value.index;
        let arrayAnswers = this.question.answers.map(
          (value: Answers, i: number): any => {
            if (i === index) {
              return {
                answer: value.answer,
                isChoice: true
              }
            }
            return value;
          }
        );
        return this.pushResult.next(this.generateResult(arrayAnswers));
      }
      if (type === 'multiple') {
        return this.pushResult.next(this.generateResult(this.formQuestionSingle.value['answers']));
      }
    }
  }

  public generateResult(value: Answers[]): Question {
    return {
      ...this.question,
      isRead: true,
      answerDate: new Date().toString(),
      answers: value
    }
  }
}
