import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditQuestionComponent } from './edit-question.component';

const routes: Routes = [
  {
    path: '',
    component: EditQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditQuestionRoutingModule { }
