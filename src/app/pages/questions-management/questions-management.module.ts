import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsManagementComponent } from './questions-management.component';
import { QuestionsManagementRoutingModule } from "./questions-management-routing.module";
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [
    QuestionsManagementComponent
  ],
  imports: [
    CommonModule,
    QuestionsManagementRoutingModule,
    ShareModule
  ]
})
export class QuestionsManagementModule { }
