import { Component } from '@angular/core';
import { StateAppService } from '../../servises/state-app.service';
import { Question } from '../../share/interfaces/question';

@Component({
  selector: 'app-questions-management',
  templateUrl: './questions-management.component.html',
  styleUrls: ['./questions-management.component.scss']
})
export class QuestionsManagementComponent {
  public questions: Question[] = [];

  constructor(public storage: StateAppService) {}

  ngAfterContentInit() {
    this.storage.init();
    this.questions = this.storage.getQuestion();
  }

  onDeleteQuestion(index: number) {
    this.questions.splice(index, 1);
    this.storage.deleteQuestion(this.questions);
  }
}
