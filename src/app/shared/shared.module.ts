import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SearchboxComponent } from './searchbox/searchbox.component';

@NgModule({
  declarations: [ButtonComponent, SearchboxComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
