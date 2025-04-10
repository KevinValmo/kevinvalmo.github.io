import { Component, inject, input } from '@angular/core';
import { NavigatorService } from '../services/navigator.service';

@Component({
  selector: 'kvsrc-tag-badge',
  standalone: true,
  template: `
    <div
      class="py-3 hover:badge-accent transition-all duration-300 badge badge-neutral"
    >
      {{ tag() }}
    </div>
  `,
})
export default class TagBadgeComponent {
  tag = input.required<string>();
}
