import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import { CreateQuestionRoutingModule } from "./create-question-routing.module";


@NgModule({
  declarations: [
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule
  ]
})
export class CreateQuestionModule { }
