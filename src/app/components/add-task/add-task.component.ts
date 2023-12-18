import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text: String = '';
  day: String ='';
  reminder: boolean = false;
  showAddTask!: boolean;
  subScription!: Subscription
  formAdd!: FormGroup;
  tasks!: Task;
  constructor(private uiService: UiService, private fb: FormBuilder){
    this.subScription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(){
    this.formAdd = this.fb.group ({
      text: ['', Validators.required],
      day: ['', Validators.required],
      reminder: ['']
    });
  }

  onSubmit(){
    if (this.formAdd.valid){
      const newTask = {
        text:this.formAdd.get('text')?.value,
        day:this.formAdd.get('day')?.value,
        reminder:this.formAdd.get('reminder')?.value,
      }
      this.onAddTask.emit(newTask);
          // clear after emit() event
          this.formAdd.reset();

    }
  }




}
