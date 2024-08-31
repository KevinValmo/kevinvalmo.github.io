import { ContentFile } from '@analogjs/content';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, input, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import PostAttributes from 'src/app/post-attributes';

@Component({
  selector: 'kvsrc-share-buttons',
  standalone: true,
  template: `
    <meta property="og:title" [content]="post().attributes.title" />
    <meta property="og:image" [content]="post().attributes.coverImage" />
    <meta property="og:description" [content]="post().attributes.description" />
    <meta property="og:url" [content]="url()" />

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
  post = input.required<ContentFile<PostAttributes | Record<string, never>>>();
  url = computed(
    () => `https://kevinvalmo.github.io/blog/${this.post().attributes.slug}`
  );
  align = input<'left' | 'right'>('right');

  isLeftAligned = computed(() => this.align() === 'left');
  isRightAligned = computed(() => this.align() === 'right');
  source = signal('kevinvalmo.github.io');
  message = signal('Check out this post! 🚀');

  linkedInIcon = faLinkedin;
  twitterIcon = faTwitter;

  buttons = computed(() => [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${this.url()}`,
    },
  ]);
}
