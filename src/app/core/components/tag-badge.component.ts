import { Component, inject, input } from '@angular/core';
import { NavigatorService } from '../services/navigator.service';

@Component({
  selector: 'kvsrc-tag-badge',
  standalone: true,
  template: `
    <div
      class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
      title="Click to see posts about {{ tag() }} 🏷️"
      (click)="navigator.navigateToBlogPostByTag($event, tag())"
    >
      {{ tag() }}
    </div>
  `,
})
export default class TagBadgeComponent {
  tag = input.required<string>();
  navigator = inject(NavigatorService);
}
