import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ItemTaskComponent } from './components/item-task/item-task.component';
import { TaskService } from './services/task.service';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UiService } from './services/ui.service';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FooterComponent,
    RouterOutlet,
    HeaderComponent,
    TaskComponent,
    ItemTaskComponent,
    ButtonComponent,
    FontAwesomeModule,
    AddTaskComponent,
    FormsModule],
  providers: [TaskService, UiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent {
  title = 'training';
}
