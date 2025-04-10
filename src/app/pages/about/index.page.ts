import { Component, effect, inject } from '@angular/core';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { HeaderService } from '../../core/services/header.service';
import { TitleComponent } from '../../core/components/title.component';

@Component({
  selector: 'app-about',
  template: `
    <app-title title="About" />
    <div class="ml-auto mr-auto max-w-3xl">
      <div>
        <h2 class="text-2xl font-semibold mt-4">
          Kevin
          <span class="text-gray-600 mt-2 text-sm align-middle"
            >- Software Engineer</span
          >
        </h2>
      </div>

      <div class="mt-6 flex flex-col gap-2">
        <div>I'm a software engineer.</div>
        <div>
          Below please find a list of technologies I've been working with
          lately.
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
  imports: [TagBadgeComponent, TitleComponent],
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

  private readonly header = inject(HeaderService);

  constructor() {
    effect(() => {
      this.header.updateMetaOg({
        title: `Kevin - I'm a software engineer specializing in C#, ASP.NET Core, Typescript, Angular, Azure, Docker, and SQL.`,
        description: `Kevin - I'm a software engineer specializing in C#, ASP.NET Core, Typescript, Angular, Azure, Docker, and SQL.`,
        coverImage: 'winter_forest_fog.jpg',
        url: 'https://kevinvalmo.github.io/about',
      });
    });
  }
}
