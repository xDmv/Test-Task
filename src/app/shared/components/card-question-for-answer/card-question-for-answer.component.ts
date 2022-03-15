import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../interfaces/question';
import { Answers } from '../../interfaces/answers';

@Component({
  selector: 'app-card-question-for-answer',
  templateUrl: './card-question-for-answer.component.html',
  styleUrls: ['./card-question-for-answer.component.scss']
})
export class CardQuestionForAnswerComponent {
  @Input() question!: Question;
  @Input() questionIndex!: number;

  @Output() pushResult: EventEmitter<Question> = new EventEmitter<Question>();

  onClearResult(item: Question) {
    let array: Answers[] = [];
    item.answers.forEach(
      (value) => {
        array.push({
          answer: value.answer,
          isChoice: false
        })
      }
    );
    this.pushResult.next({
      ...item,
      isRead: false,
      answerDate: new Date().toString(),
      answers: array
    });
  }

}
