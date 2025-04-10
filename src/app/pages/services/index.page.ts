import { Component, effect, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderService } from '../..//core/services/header.service';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../core/components/title.component';

@Component({
  selector: 'app-services',
  template: `
    <app-title title="Services" />
    <div class="mt-6 flex flex-col gap-2">
      You are not supposed to be here. 😮
      <div class="divider"></div>
      Instead of this page, you should check out my blog posts at this link:
      <a
        class="text-primary font-bold text-2xl hover:underline"
        [routerLink]="'/blog'"
        >/blog</a
      >
    </div>
  `,
  imports: [FontAwesomeModule, RouterLink, TitleComponent],
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
