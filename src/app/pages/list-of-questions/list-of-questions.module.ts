import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfQuestionsComponent } from './list-of-questions.component';
import { ListOfQuestionsRoutingModule } from './list-of-questions-routing.module';
import { ShareModule } from '../../shared/share.module';
import {CardQuestionForListModule} from "../../shared/components/card-question-for-list/card-question-for-list.module";


@NgModule({
  declarations: [
    ListOfQuestionsComponent
  ],
  imports: [
    CommonModule,
    ListOfQuestionsRoutingModule,
    ShareModule,
    CardQuestionForListModule
  ]
})
export class ListOfQuestionsModule { }
