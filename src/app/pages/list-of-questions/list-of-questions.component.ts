import { Component, OnInit } from '@angular/core';
import {Question} from "../../share/interfaces/question";
import {StateAppService} from "../../servises/state-app.service";

@Component({
  selector: 'app-list-of-questions',
  templateUrl: './list-of-questions.component.html',
  styleUrls: ['./list-of-questions.component.scss']
})
export class ListOfQuestionsComponent implements OnInit {
  public questions: Question[] = [];
  public answers: Question[] = [];
  public isNotQuestions = false;

  constructor(public storage: StateAppService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.init();
  }

  public init() {
    this.storage.init();
    this.questions = this.storage.getQuestion();
    if (this.questions === null) {
      this.isNotQuestions = true;
    }
    this.questions.map(
      (item: Question) => {
        if (item.isRead) {
          this.answers.push(item);
        }
      }
    );
  }

  public isChoiceAnswer(answer: Question) {
    console.log('isChoiceAnswer: ', answer);
    this.answers.push(answer);
    this.storage.saveEditQuestion(answer, answer.id);
    this.init();
  }

  public removeAnswer(answer: Question) {
    this.storage.saveEditQuestion(answer, answer.id);
    this.init();
  }

}
