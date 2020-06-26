import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.sass'],
})
export class FormButtonComponent {
  @Input() step: number = 0;
  @Input() disabled: boolean = true;
  @Output() onNext = new EventEmitter<number>();

  succeed: boolean = false;

  constructor(private router: Router) {}

  handleNext() {
    if (this.step < 3) {
      const url = this.nextStep(this.step + 1);
      this.router.navigate([url]);
    }

    this.onNext.emit();

    if (this.step === 3) {
      this.succeed = true;
      setTimeout(() => {
        this.succeed = false;
      }, 2000);
    }
  }

  handleCancel() {
    const url = this.nextStep(this.step > 1 ? this.step - 1 : 1);
    this.router.navigate([url]);
  }

  nextStep(step: number) {
    const base = '/home/';
    switch (step) {
      case 2:
        return `${base}fill`;
      case 3:
        return `${base}confirmation`;
      default:
        return `${base}select`;
    }
  }

  get nextButtonText() {
    switch (this.step) {
      case 3:
        return 'Submit';
      default:
        return 'Next';
    }
  }
}
