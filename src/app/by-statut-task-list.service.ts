import { Injectable } from '@angular/core';
import { TaskList } from './task-list';
import { CRUDTaskListService } from './crudtask-list.service';
import { ByStatutTaskList } from './by-statut-task-list';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService implements ByStatutTaskList{

  constructor(private CRUDService: CRUDTaskListService) { 
    this.tasklist = this.CRUDService.getAllTasks();
  }
  tasklist!:TaskList;
  
  getAllTasks():TaskList{
    var array = this.tasklist.tasks;
    array.sort((a,b)=>a.etat.localeCompare(b.etat));
    this.tasklist.tasks = array;
    return this.tasklist;
  }
}
