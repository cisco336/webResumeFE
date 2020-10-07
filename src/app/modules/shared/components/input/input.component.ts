import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() hint: string;
  @Input() color: 'primary' | 'accent' | 'warn';
  @Input() disabled: boolean;
  @Input() icon: boolean;
  @Input() iconClick: boolean;
  @Input() type: string;

  @Output() formControl: EventEmitter<FormControl> = new EventEmitter();
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  control: FormControl = new FormControl();

  lightColor = false;

  constructor() {}

  ngOnInit(): void {
    this.formControl.emit(this.control);
  }

  iconClicked() {
    if (!this.iconClick) {
      return;
    }
    this.clicked.emit();
    this.lightColor = !this.lightColor;
  }
}
