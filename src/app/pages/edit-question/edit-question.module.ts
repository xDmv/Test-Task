import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question.component';
import { EditQuestionRoutingModule } from "./edit-question-routing.module";


@NgModule({
  declarations: [
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    EditQuestionRoutingModule
  ]
})
export class EditQuestionModule { }
