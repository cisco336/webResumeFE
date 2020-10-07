import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { HAS_NUMBER, HAS_SPECIAL_CHARACTER } from '../../../../Utils/helpers';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnChanges {
  @Input() passwd: string;
  @Input() confirm: string;

  @Output() isStrong: EventEmitter<boolean> = new EventEmitter();

  firstChange = true;

  characters = false;
  uppercase = false;
  number = false;
  special = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.firstChange && this.passwd !== null) {
      this.validate(this.passwd);
    }
    this.firstChange = false;
  }

  /** Method to validate password strength */
  validate(password: string) {
    let i = 0;
    let char = '';
    const upper = [];
    const lower = [];
    const hasNumber = [];
    const special = [];

    while (i < password.length) {
      char = password.charAt(i);

      // Check if char is not number or special character
      if (!RegExp(HAS_NUMBER).test(char) && !char.match(/[^a-z\d]+/i)) {
        // Is uppercase or lowercase
        if (char === char.toUpperCase()) {
          upper.push(char);
        } else {
          lower.push(char);
        }

        // Checks if char is a number
      } else if (RegExp(HAS_NUMBER).test(char)) {
        hasNumber.push(char);

        // Checks if char is a special character
      } else if (RegExp(HAS_SPECIAL_CHARACTER).test(char)) {
        special.push(char);
      }
      i++;
    }
    this.characters = this.passwd.length >= 8;
    this.uppercase = upper.length > 0 && lower.length > 0;
    this.number = hasNumber.length > 0;
    this.special = special.length > 0;

    // Emits the result of the validations
    this.emitPass(
      this.characters && this.uppercase && this.number && this.special
    );
  }

  emitPass(value) {
    this.isStrong.emit(value);
  };
}
