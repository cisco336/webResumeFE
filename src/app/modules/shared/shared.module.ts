import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Material imports */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/** Components */
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

const components = [ButtonComponent, InputComponent];

@NgModule({
  declarations: [...components, InputComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [...components, MaterialModule, ReactiveFormsModule]
})
export class SharedModule {}
