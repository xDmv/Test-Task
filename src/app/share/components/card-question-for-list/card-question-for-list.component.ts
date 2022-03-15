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
  public formQuestionMultiple!: FormGroup;
  public choiceAnswers: number[] = [];
  public answerForOpen: string = '';
  public isValid = false;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.init();
  }

  public init() {
    if (this.question.type === 'open') {
      this.formQuestion = this.formBuilder.group({
        answer: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(1)]],
        isChoice: true
      });
    }
    if (this.question.type === 'single') {

    }
    if (this.question.type === 'multiple') {

    }
  }

  public validation(type: string) {
    if (type === 'open') {
      this.isValid = true;
      return;
    }

  }

  public choiceAnswer(index: number) {
    this.choiceAnswers.push(index);
  }

  public saveResultAnswer(type: string) {
    this.formQuestion.markAllAsTouched();
    console.log('this.answerForOpen: ', this.formQuestion.value);
    // if (type === 'open') {
    //   let json: Question = {
    //     ...this.question,
    //     isRead: true,
    //     answers: [
    //       {
    //         answer: this.answerForOpen,
    //         isChoice: true
    //       }
    //     ]
    //   };
    //   return this.pushResult.next(json);
    // }

  }
}
