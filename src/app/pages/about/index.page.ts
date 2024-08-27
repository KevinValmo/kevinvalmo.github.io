import { Component, inject } from '@angular/core';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="ml-auto mr-auto max-w-3xl">
      <div>
        <h2 class="text-2xl font-semibold mt-4">
          Kevin
          <span class="text-gray-600 mt-2 text-sm align-middle"
            >- A Web Developer</span
          >
        </h2>
      </div>

      <div class="mt-6 flex flex-col gap-2">
        <div>I solve problems with code. Oh, and I'm a web developer.</div>
        <div>
          Below please find a list of technologies I've been working with
          lately. Just click on the badges to see if I've written any posts
          about them.
          <div class="divider"></div>
          <div class="flex gap-2 mt-2 flex-wrap">
            @for (technology of technologies; track $index) {
            <kvsrc-tag-badge [tag]="technology" />
            }
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [TagBadgeComponent],
})
export default class AboutComponent {
  protected readonly technologies = [
    'C#',
    'ASP.NET Core',
    'Typescript',
    'Angular',
    'Azure',
    'Docker',
    'SQL',
  ];
  protected readonly navigator = inject(NavigatorService);
}
