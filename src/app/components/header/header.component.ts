import { UiService } from './../../services/ui.service';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = "Training Task Tracker";
  showAddTask! : boolean;
  subScription! : Subscription;

  constructor(private uiService:UiService){
    this.subScription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
