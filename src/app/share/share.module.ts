import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonComponent } from './form-button/form-button.component';
import { HeadComponent } from './head/head.component';
import { BackComponent } from './back/back.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [FormButtonComponent, HeadComponent, BackComponent];
const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, modules],
})
export class ShareModule {}
