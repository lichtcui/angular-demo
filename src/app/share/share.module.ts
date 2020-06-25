import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonComponent } from './form-button/form-button.component';
import { HeadComponent } from './head/head.component';
import { BackComponent } from './back/back.component';

const components = [FormButtonComponent, HeadComponent, BackComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components, CommonModule],
})
export class ShareModule {}
