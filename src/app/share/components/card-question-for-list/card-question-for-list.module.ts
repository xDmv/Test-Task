import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardQuestionForListComponent } from './card-question-for-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CardQuestionForListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CardQuestionForListComponent]
})
export class CardQuestionForListModule { }
