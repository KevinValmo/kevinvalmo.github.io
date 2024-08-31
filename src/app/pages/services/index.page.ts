import { Component, effect, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { HeaderService } from '../..//core/services/header.service';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="card shadow-lg bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Front-End Development 🚀</h2>
            <p>
              I deliver top-tier front-end development services, utilizing the
              latest technologies and best practices to create responsive,
              user-friendly, and visually appealing interfaces.
            </p>
            <p class="flex flex-row gap-4">
              @for(feTech of feTechs; track feTech) {
              <span class="badge badge-neutral">{{ feTech }}</span>
              }
            </p>
          </div>
        </div>
        <div class="card shadow-lg bg-base-200">
          <div class="card-body">
            <h2 class="card-title">Back-End Development 🛠️</h2>
            <p>
              I provide cutting-edge back-end development services, leveraging
              the latest technologies and industry best practices to deliver
              robust, scalable, and efficient solutions.
            </p>
            <p class="flex flex-row gap-4">
              @for(beTech of beTechs; track beTech) {
              <span class="badge badge-neutral">{{ beTech }}</span>
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
      this.header.updateLinkedinShare({
        title: 'Services',
        description: 'Check out our services!',
        coverImage: 'trees.jpeg',
        url: 'https://kevinvalmo.github.io/services',
      });
    });
  }
}
