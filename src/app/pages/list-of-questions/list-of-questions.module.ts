import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfQuestionsComponent } from './list-of-questions.component';
import { ListOfQuestionsRoutingModule } from './list-of-questions-routing.module';


@NgModule({
  declarations: [
    ListOfQuestionsComponent
  ],
  imports: [
    CommonModule,
    ListOfQuestionsRoutingModule
  ]
})
export class ListOfQuestionsModule { }
