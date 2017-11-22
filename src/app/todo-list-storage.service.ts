import { Injectable } from '@angular/core';
import {it} from "selenium-webdriver/testing";
const storageName = 'todo_list';

@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }
  get() {
    return [...this.todoList];
  }
  post(item) {
    this.todoList =  [...this.todoList, item];
    return this.update();
  }


}
