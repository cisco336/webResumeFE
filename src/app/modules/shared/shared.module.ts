import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Material imports */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/** Components */
import { ButtonComponent } from './components/button/button.component';

const components = [ButtonComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [...components]
})
export class SharedModule {}
