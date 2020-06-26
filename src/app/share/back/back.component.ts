import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  template: `
    <div class="my-3 flex-center black-link" (click)="onBack()">
      <small class="mr-2">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </small>
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
