import { Injectable } from '@angular/core';
import { TaskList } from './task-list';
import { STATEENUM } from './state-enum';
import { CRUDTaskList } from './crudtask-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListService implements CRUDTaskList {

  constructor() { this.tasklist=new TaskList();
    this.tasklist.tasks=[{
      titre:"Main Task",
      description:"This is the main task",
      etat:STATEENUM.EN_COURS, 
      creationDate: new Date()
    },
    {
      titre:"Side Quest",
      description:"This is a side quest",
      etat:STATEENUM.A_FAIRE, 
      creationDate: new Date()
    },
    {
      titre:"Tutorial",
      description:"Ceci est le tuto",
      etat:STATEENUM.TERMINEE,
      creationDate: new Date()
    }]}
  tasklist!:TaskList;
  
  getAllTasks():Observable<TaskList>{
    return of(this.tasklist);
  }
}
