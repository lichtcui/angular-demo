import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  template: '<h3>{{ head }}</h3>',
  styles: [''],
})
export class HeadComponent {
  @Input() head: string = '';

  constructor() {}
}
