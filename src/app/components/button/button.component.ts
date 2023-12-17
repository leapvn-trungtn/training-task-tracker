import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent{
  @Input() text: String ="";
  @Input() color: String = "";
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
