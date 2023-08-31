import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionBoardComponent } from './question-board';
import { GoodSpinComponent } from './spin-good';
import { BadSpinComponent } from './spin-bad';

const routes: Routes = [
    { path: 'board', component: QuestionBoardComponent, data: { title: 'Board'} },
    { path: 'goodSpin', component: GoodSpinComponent, data: { title: 'Wheel of Fortune' } },
    { path: 'badSpin', component: BadSpinComponent , data: { title: 'Wheel of Misfortune' } },

    // otherwise redirect to home
    { path: '**', redirectTo: '/board' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {      
  }