import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionBoardComponent } from './question-board/question-board.component';
import { QuestionButtonComponent } from './question-button/question-button.component';
import { QuestionPopupComponent } from './question-popup/question-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionBoardComponent,
    QuestionButtonComponent,
    QuestionPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
