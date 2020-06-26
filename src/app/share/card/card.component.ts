import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="my-2">
      <strong>{{ name }}</strong>
      <div>{{ label }}</div>
    </div>
  `,
})
export class CardComponent {
  @Input() name: string;
  @Input() label: string = `label's here`;

  constructor() {}
}
