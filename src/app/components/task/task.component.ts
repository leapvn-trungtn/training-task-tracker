import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { ItemTaskComponent } from '../item-task/item-task.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Observable, of, take } from 'rxjs';
import { response } from 'express';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItemTaskComponent,CommonModule,AddTaskComponent,ToastModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',

})
export class TaskComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private messageService:MessageService) {
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }
  deleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe(() =>
    this.tasks = this.tasks.filter(
      (t) => t.id !== task.id)
      );
  }
  changeStatus(task: Task){
    // task.reminder = !task.reminder;
    this.taskService.changeStatus(task).subscribe(() =>
    this.taskService.getTasks().subscribe(
      (tasks)=> this.tasks = tasks)
    );
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe(
      ()=>{
        this.tasks.push(task);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Task Successfully' });
      },
      (error)=> {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Add Task Fail' });
      });
  }
}
