import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import { CreateQuestionRoutingModule } from "./create-question-routing.module";
import { ShareModule } from '../../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateQuestionComponent
  ],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreateQuestionModule { }
