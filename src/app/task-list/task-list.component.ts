import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../task-list';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks!:Task[];
}
