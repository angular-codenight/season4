import { Component } from '@angular/core';

@Component({
  // selector: 'app-todo-list-item',
  // selector: '[app-todo-list-item]', //attribute selector
   selector: '.app-todo-list-item', // class selector
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
 taskId=10;
 taskName='new Task';
 status =true;

 returnTaskName(){
   return this.taskName;
 }

}
