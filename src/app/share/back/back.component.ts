import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  template: `
    <div class="my-3" (click)="onBack()">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <div class="left"></div>
      <div>{{ desc }}</div>
    </div>
  `,
  styles: [''],
})
export class BackComponent {
  @Input() step: number = 0;
  @Input() desc: string = '';

  constructor(private router: Router) {}

  onBack() {
    const url = this.prevStep();
    this.router.navigate([url]);
  }

  prevStep() {
    const base = '/home/';
    switch (this.step) {
      case 3:
        return `${base}fill`;
      default:
        return `${base}select`;
    }
  }
}
