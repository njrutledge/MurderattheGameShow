import { Component, Input } from '@angular/core';
import { QUESTION } from '../question';
@Component({
  selector: 'question-board',
  template: `
    <div class="top">
      <div class="category"> Category1</div>
      <div class="category"> Category2</div>
      <div class="category"> Category3</div>
      <br>
      <question-button [question] = questions[0][0]></question-button>
      <question-button [question] = questions[1][0]></question-button>
      <question-button [question] = questions[2][0]></question-button>
      <br>
      <question-button [question] = questions[0][1]> </question-button>
      <question-button [question] = questions[1][1]> </question-button>
      <question-button [question] = questions[2][1]> </question-button>
      <br>
      <question-button [question] = questions[0][2]> </question-button>
      <question-button [question] = questions[1][2]> </question-button>
      <question-button [question] = questions[2][2]> </question-button>    
    </div>
  `,
  styleUrls: ['./question-board.component.css']
})
export class QuestionBoardComponent {
  @Input() questions: any;
  clicked = false;
}
