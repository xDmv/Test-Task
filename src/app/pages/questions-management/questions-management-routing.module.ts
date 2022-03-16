import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsManagementComponent } from './questions-management.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsManagementComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsManagementRoutingModule { }
