import { Component, effect, inject } from '@angular/core';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { HeaderService } from '../../core/services/header.service';
import { TitleComponent } from '../../core/components/title.component';

@Component({
  selector: 'app-about',
  host: { class: 'w-full' },
  template: `
    <app-title title="About" />
    <div>
      <h2 class="text-2xl font-semibold mt-4">
        Kevin Valmorbida
        <span class="text-gray-600 mt-2 text-sm align-middle">
          - Software Engineer
        </span>
      </h2>
    </div>
    <p class="mt-4">
      Full Stack Software Developer with solid experience in .NET, C#, Angular,
      TypeScript, SQL, and real-time integrations, driven by a strong passion
      for continuous learning. Proficient in software architecture,
      problem-solving, and creating custom solutions. Skilled in consulting, and
      project management to achieve objectives.
    </p>
    <div class="divider"></div>
    <div class="flex flex-col sm:flex-row gap-2">
      <div class="italic align-middle">Tech stack I work with:</div>
      <div class="flex gap-2 flex-wrap align-middle flex-1 sm:justify-end">
        @for (technology of technologies; track $index) {
        <kvsrc-tag-badge [tag]="technology" />
        }
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
