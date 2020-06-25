import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  template: '<h1>{{ head }}</h1>',
  styles: [''],
})
export class HeadComponent {
  @Input() head: string = '';

  constructor() {}
}
