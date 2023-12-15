import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
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
  faTimes = faTimes;

}
