import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardQuestionComponent } from './components/card-question/card-question.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardQuestionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardQuestionComponent
  ]
})
export class ShareModule { }
