import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task';
import { ItemTaskComponent } from '../item-task/item-task.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItemTaskComponent,CommonModule],


  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',

})
export class TaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tasks)=> this.tasks = tasks);
  }
}
