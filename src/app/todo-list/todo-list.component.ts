import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks:string[]=[]
  newTask='';

  addNewTask() {
    if(this.newTask){
      this.tasks.push(this.newTask);
    }
  }

  onRemoveTask() {
    this.tasks.pop();
  }
}
