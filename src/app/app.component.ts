import { Component } from '@angular/core';
import { QUESTION } from './question';
import QuestionJson from './questions.json';

@Component({
  selector: 'app-root',
  template: `<div>
    <question-board [questions] = "Questions"></question-board>
  </div>`,
})
export class AppComponent {
  title = 'murder at the game show';
  Questions: QUESTION[][] = QuestionJson;
  constructor() {
    console.log(this.Questions);
  }
}