import { Component, effect, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { HeaderService } from '../..//core/services/header.service';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Front-End Development 🚀</h2>
            <p>
              I deliver top-tier front-end development services, utilizing the
              latest technologies and best practices to create responsive,
              user-friendly, and visually appealing interfaces.
            </p>
            <p class="flex flex-row gap-2 flex-wrap">
              @for(tech of feTechs; track tech) {
              <span class="badge badge-neutral rounded-xl p-4">
                {{ tech }}
              </span>
              }
            </p>
          </div>
        </div>
        <div class="card bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Back-End Development 🛠️</h2>
            <p>
              I provide cutting-edge back-end development services, leveraging
              the latest technologies and industry best practices to deliver
              robust, scalable, and efficient solutions.
            </p>
            <p class="flex flex-row gap-2 flex-wrap">
              @for(tech of beTechs; track tech) {
              <span class="badge badge-neutral rounded-xl p-4">
                {{ tech }}
              </span>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [FontAwesomeModule, TagBadgeComponent],
})
export default class ContactComponent {
  feTechs = ['Html', 'CSS', 'Typescript', 'Angular'];
  beTechs = ['C#', '.Net', 'SQL'];

  header = inject(HeaderService);
  constructor() {
    effect(() => {
      this.header.updateMetaOg({
        title:
          'Services - I provide top-tier front-end and back-end development services to help you build your dream project.',
        description:
          'I provide top-tier front-end and back-end development services to help you build your dream project. Contact me to get started!',
        coverImage: 'trees.jpeg',
        url: 'https://kevinvalmo.github.io/services',
      });
    });
  }
}
