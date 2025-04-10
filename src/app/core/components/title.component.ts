import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div class="text-4xl font-bold pb-8">
      {{ title() }}
    </div>
  `,
})
export class TitleComponent {
  title = input.required<string>();
}
