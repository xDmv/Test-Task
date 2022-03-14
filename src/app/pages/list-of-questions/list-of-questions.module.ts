import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfQuestionsComponent } from './list-of-questions.component';
import { ListOfQuestionsRoutingModule } from './list-of-questions-routing.module';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [
    ListOfQuestionsComponent
  ],
  imports: [
    CommonModule,
    ListOfQuestionsRoutingModule,
    ShareModule
  ]
})
export class ListOfQuestionsModule { }
