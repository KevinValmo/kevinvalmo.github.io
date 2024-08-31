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

// https://www.linkedin.com/feed/
//?shareActive=true
//&text=Today%20I%20completed%20%22Share%20on%20LinkedIn%20-%20LinkedIn%20%7C%20Microsoft%20Learn%22!%20I%27m%20so%20proud%20to%20be%20celebrating%20this%20achievement%20and%20hope%20this%20inspires%20you%20to%20start%20your%20own%20%40MicrosoftLearn%20journey!%0A%0D%0Ahttps%3A%2F%2Flearn.microsoft.com%2Fen-us%2Flinkedin%2Fconsumer%2Fintegrations%2Fself-serve%2Fshare-on-linkedin%3Fcontext%3Dlinkedin%252Fconsumer%252Fcontext%26WT.mc_id%3Dlinkedin
