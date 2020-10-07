import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn';
  @Input() disabled: boolean;
  @Output() emit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toEmit() {
    this.emit.emit();
  }
}
