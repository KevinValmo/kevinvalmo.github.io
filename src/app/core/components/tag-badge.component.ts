import { Component, input } from '@angular/core';

@Component({
  selector: 'kvsrc-tag-badge',
  standalone: true,
  template: `
    <div
      class="py-3 transition-all duration-300 badge badge-neutral"
    >
      {{ tag() }}
    </div>
  `,
})
export default class TagBadgeComponent {
  tag = input.required<string>();
}
