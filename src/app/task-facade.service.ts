import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crudtask-list.service';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { TaskList } from './task-list';

@Injectable({
  providedIn: 'root'
})
export class TaskFacadeService {  
  constructor(private CRUDService:CRUDTaskListService, private ByStatutService:ByStatutTaskListService) { }
  getAllTasks():TaskList{
    return this.CRUDService.getAllTasks();
  }}
