import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input
      [value]="input"
      (input)="setInput($event)"
      (keyup.enter)="setTitle($event.target.value)"
      #inputElement
    >
    <button
      (click)="setTitle(inputElement.value)"
    >Save
    </button>
    <p>The title is: {{ title }}</p>
    <p>and this is the input result: {{input}}</p>
  `,
  styleUrls: ['./input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter;
  title: string = 'tits';
  input: string = '';

  constructor() {
    this.title = 'Hello World';
    this.changeTitle('new title');

  }
  ngOnInit() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
  generateTitle(): string {
    return 'generated fifle';
  }
  setInput(event): void {
    this.input = event.target.value;
  }
  setTitle(value): void {
    this.title = value;
    this.submit.emit(value);
  }

}
