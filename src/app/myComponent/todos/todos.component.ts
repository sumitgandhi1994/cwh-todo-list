import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localItem!: string | null;
  todos!: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todos');
    // if (this.localItem == null) {
    //   this.localItem = [];
    // } else {
    //   this.localItem = JSON.parse(this.localItem);
    // }
    if (this.localItem !== null) {
      // item not null code
      this.todos = JSON.parse(this.localItem);
    } else {
      // item is null code
      this.todos = [];
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(index);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(todo);
  }
}
