import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks:any[]=[]
  newTask='';
  static i=1;

  addNewTask() {
    if(this.newTask){
      this.tasks.push({id:TodoListComponent.i,name:this.newTask});
      TodoListComponent.i++;
    }
  }

  onRemoveTask() {
    this.tasks.pop();
  }
  tackByFn(index:number,item:any){
    return item.id;
  }
}
