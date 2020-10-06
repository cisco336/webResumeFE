import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() disabled: boolean;
  @Output() emit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  toEmit() {
    this.emit.emit();
  }
}
