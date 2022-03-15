import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { CardQuestionForAnswerComponent } from './components/card-question-for-answer/card-question-for-answer.component';
import { CardQuestionForListModule } from './components/card-question-for-list/card-question-for-list.module';


@NgModule({
  declarations: [
    HeaderComponent,
    CardQuestionComponent,
    CardQuestionForAnswerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardQuestionComponent,
    CardQuestionForAnswerComponent,
  ]
})
export class ShareModule { }
