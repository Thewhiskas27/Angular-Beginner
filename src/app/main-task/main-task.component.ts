import { Component, OnInit } from '@angular/core';
import { TaskList } from '../task-list';
import { TaskFacadeService } from '../task-facade.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})
export class MainTaskComponent implements OnInit {
  tasklist!:TaskList;
  constructor(private taskFacade: TaskFacadeService){}
  ngOnInit(): void {
   this.taskFacade.getAllTasks().subscribe((tasklist)=>{
    this.tasklist = tasklist;
    console.log(this.tasklist);
   });
  }
  /*constructor(private byStatutTaskListService: ByStatutTaskListService){}
  ngOnInit(): void {
   this.tasklist=this.byStatutTaskListService.getAllTasks();
   console.log(this.tasklist);
  }*/
  /*constructor(private crudTaskService: CRUDTaskListService){}
  ngOnInit(): void {
   this.tasklist=this.crudTaskService.getAllTasks();
   console.log(this.tasklist);
  }*/
}
