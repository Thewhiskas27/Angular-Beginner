import { Component, OnInit } from '@angular/core';
import { STATEENUM } from '../state-enum';
import { TaskList } from '../task-list';
import { CRUDTaskListService } from '../crudtask-list.service';
import { ByStatutTaskListService } from '../by-statut-task-list.service';
import { Task } from '../task';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})
export class MainTaskComponent implements OnInit {
  tasklist!:TaskList;

  constructor(private byStatutTaskListService: ByStatutTaskListService){}
  ngOnInit(): void {
   this.tasklist=this.byStatutTaskListService.getAllTasks();
   console.log(this.tasklist);
  }
  /*constructor(private crudTaskService: CRUDTaskListService){}
  ngOnInit(): void {
   this.tasklist=this.crudTaskService.getAllTasks();
   console.log(this.tasklist);
  }*/
}
