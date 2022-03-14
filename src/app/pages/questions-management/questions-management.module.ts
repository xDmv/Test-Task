import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsManagementComponent } from './questions-management.component';
import { QuestionsManagementRoutingModule } from "./questions-management-routing.module";

@NgModule({
  declarations: [
    QuestionsManagementComponent
  ],
  imports: [
    CommonModule,
    QuestionsManagementRoutingModule
  ]
})
export class QuestionsManagementModule { }
