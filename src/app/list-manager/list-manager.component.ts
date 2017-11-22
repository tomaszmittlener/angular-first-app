import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
    <todo-input (submit)="addTodoItem($event)" style="text-align:center" ></todo-input>
    <div style="text-align:left">
      <ul>
        <li *ngFor="let item of todoList">
          <todo-item [item]="item"></todo-item>
        </li>
      </ul>
    </div>
    </div>
  `,
  styleUrls: ['./list-manager.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListManagerComponent implements OnInit {
  todoList: Array<{title: string}> =  [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.setTodoList();
  }

  setTodoList(): void {
    this.todoList = this.todoListService.getTodoList();

  }
  addTodoItem(event): void {
    this.todoListService.setNewItem(event);
  }


}
