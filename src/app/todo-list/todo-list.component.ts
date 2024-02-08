import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks:any[]=[]
  newTask='';
  importance='1';



  addNewTask() {

    const id =Math.random();
    const taskStatus=id>0.5?'enable':'disable';
    if(this.newTask){
      this.tasks.push(
        {id:id,
          name:this.newTask,
          status:taskStatus,
          done:false,
          importance:this.importance
        });

    }
    console.log(this.tasks)
  }

  onRemoveTask() {
    this.tasks.pop();
  }
  tackByFn(index:number,item:any){
    return item.id;
  }



  returnTaskStatus(task:any){
    return task.status==='enable'?1:0.5
  }


  doneTask(id:number, $event: any) {
    const taskStatus=$event.target.checked;
    const index=this.tasks.findIndex(task=>task.id===id);
    if(index!==-1){
      this.tasks[index].done=taskStatus;
    }
  }
}
