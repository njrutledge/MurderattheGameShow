import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-button',
  template: `
    <button [disabled]="clicked" (click)="clicked = true;"> {{question.reward}}</button>
    <div class="overlay" *ngIf="clicked && !answerClicked">
      <div class="popup" *ngIf="!questionClicked">
        <button (click)="questionClicked = true"> 
          {{question.question}} 
        </button>
      </div>
      <div class="popup" *ngIf="questionClicked && !answerClicked">
        <button (click)="answerClicked = true;"> 
          {{question.answer}} 
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./question-button.component.css']
})
export class QuestionButtonComponent {
  @Input() question: any
  clicked = false;
  questionClicked = false;
  answerClicked = false;

}
