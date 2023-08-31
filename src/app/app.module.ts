import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionButtonComponent } from './question-button/question-button.component';
import { QuestionPopupComponent } from './question-popup/question-popup.component';
import { GoodSpinComponent } from './spin-good';
import { BadSpinComponent } from './spin-bad';
import { SpinComponent } from './spin/spin.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionBoardComponent,
    QuestionButtonComponent,
    QuestionPopupComponent,
    GoodSpinComponent,
    BadSpinComponent,
    SpinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
