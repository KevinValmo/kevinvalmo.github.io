import { Component, computed, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'kvsrc-share-buttons',
  standalone: true,
  template: `
    <div class="content-center text-xl font-bold mb-2">
      Fell free to share on with your friends! 🚀
    </div>
    <div
      class="flex gap-2"
      [class.justify-start]="isLeftAligned()"
      [class.justify-end]="isRightAligned()"
    >
      @for (button of buttons(); track button.name) {
      <a
        class="btn "
        [href]="button.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa-icon [icon]="button.icon"></fa-icon>
      </a>
      }
    </div>
  `,
  imports: [FontAwesomeModule],
})
export default class ShareButtonsComponent {
  url = input.required<string>();
  align = input<'left' | 'right'>('right');

  isLeftAligned = computed(() => this.align() === 'left');
  isRightAligned = computed(() => this.align() === 'right');
  message = signal('Check out this post! 🚀');

  linkedInIcon = faLinkedin;
  twitterIcon = faTwitter;

  buttons = computed(() => [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: `https://www.linkedin.com/feed/?shareArticle=true?&text=${this.message()}${this.url()}`,
    },
  ]);
}
