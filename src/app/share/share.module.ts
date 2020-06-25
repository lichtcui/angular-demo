import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonComponent } from './form-button/form-button.component';
import { HeadComponent } from './head/head.component';

const components = [FormButtonComponent, HeadComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ShareModule {}
