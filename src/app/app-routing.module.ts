import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'questions-management',
    loadChildren: () => import('./pages/questions-management/questions-management.module').then(m => m.QuestionsManagementModule)
  },
  {
    path: 'create-question',
    loadChildren: () => import('./pages/create-question/create-question.module').then(m => m.CreateQuestionModule)
  },
  {
    path: 'edit-question/:id',
    loadChildren: () => import('./pages/edit-question/edit-question.module').then(m => m.EditQuestionModule)
  },
  {
    path: 'list-questions',
    loadChildren: () => import('./pages/list-of-questions/list-of-questions.module').then(m => m.ListOfQuestionsModule)
  },
  {
    path: '',
    redirectTo: '/questions-management',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
