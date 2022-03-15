import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuestionComponent } from './edit-question.component';
import { EditQuestionRoutingModule } from "./edit-question-routing.module";
import { ShareModule } from '../../shared/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditQuestionComponent
  ],
  imports: [
    CommonModule,
    EditQuestionRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EditQuestionModule { }
