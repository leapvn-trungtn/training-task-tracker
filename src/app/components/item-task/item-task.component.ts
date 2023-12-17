import { emit } from 'process';
import { Task } from './../../Task';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-item-task',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './item-task.component.html',
  styleUrl: './item-task.component.scss'
})
export class ItemTaskComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onChangeStatus: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task :Task) {
    this.onDeleteTask.emit(task);
  }

  onStatus(task: Task) {
    this.onChangeStatus.emit(task);
    console.log('ok lalala')
  }

}
