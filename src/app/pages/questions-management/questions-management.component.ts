import { Component } from '@angular/core';
import { StateAppService } from '../../services/state-app.service';
import { Question } from '../../shared/interfaces/question';

@Component({
  selector: 'app-questions-management',
  templateUrl: './questions-management.component.html',
  styleUrls: ['./questions-management.component.scss']
})
export class QuestionsManagementComponent {
  public questions: Question[] = [];
  public isNotQuestions = false;

  constructor(public storage: StateAppService) {}

  ngAfterContentInit() {
    this.storage.init();
    this.questions = this.storage.getQuestion();
    if (this.questions === null) {
      this.isNotQuestions = true;
    }
  }

  onDeleteQuestion(index: number) {
    this.questions.splice(index, 1);
    this.storage.deleteQuestion(this.questions);
  }
}
