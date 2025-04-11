import { Component, computed, effect, inject } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { DatePipe } from '@angular/common';

import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import ShareButtonsComponent from '../../core/components/share-buttons.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderService } from '../../core/services/header.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostAttributes } from '../../types';

@Component({
  selector: 'app-blog-post',
  host: { class: 'w-full' },
  imports: [
    MarkdownComponent,
    DatePipe,
    TagBadgeComponent,
    ShareButtonsComponent,
    FontAwesomeModule,
  ],
  template: `
    @let localPost = post(); @if (localPost) {
    <article>
      <div
        class="rounded-3xl mb-4 w-full h-96 bg-cover bg-center flex items-end p-4 justify-end"
        style="background-image: url('/{{ localPost.attributes.coverImage }}')"
      >
        <div
          class="bg-base-100/50 backdrop-blur-sm rounded-2xl text-white px-4 py-2 text-sm font-semibold"
        >
          {{
            localPost.attributes.coverImageTitle ||
              localPost.attributes.coverImage
          }}
        </div>
      </div>
      <div class="flex flex-col gap-2 ">
        <div class="text-4xl font-bold">{{ localPost.attributes.title }}</div>
        <div class="italic">{{ localPost.attributes.description }}</div>
        <div class="flex gap-2 flex-wrap justify-end">
          <div class="flex gap-2 ml-auto mr-0 flex-wrap">
            @for (tag of localPost.attributes.tags.split(','); track $index) {
            <kvsrc-tag-badge [tag]="tag" />
            }
          </div>
          <div class="text-gray-600 italic text-right">🕑 {{ readTime() }}</div>
        </div>
        <div class="text-gray-600 italic text-right">
          {{ localPost.attributes.date | date : 'mediumDate' }}
        </div>
      </div>
      <div class="divider"></div>
      <analog-markdown class="prose" [content]="localPost.content" />
      <div class="divider"></div>
      <kvsrc-share-buttons [url]="postUrl()" [align]="'left'" />
    </article>
    } @else {
    <div class="flex justify-center items-center h-96">
      <fa-icon [icon]="spinnerIcon" class="text-4xl animate-spin" />
    </div>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');

  readonly spinnerIcon = faSpinner;
  readonly post = toSignal(this.post$);

  postUrl = computed(
    () => `https://kevinvalmo.github.io/blog/${this.post()?.attributes.slug}`
  );

  readonly navigator = inject(NavigatorService);

  headerService = inject(HeaderService);

  private calculatePostDescription = computed(() => {
    const post = this.post();
    if (post == null) {
      return '';
    }

    let description = post.attributes.description;
    const content = post.content?.toString();

    const missingLength = 150 - description.length;
    if (missingLength > 0 && content != null) {
      const sanitizedContent = this.sanitizeContent(content!);
      const words = sanitizedContent.slice(0, missingLength);
      description += ` ${words}`;
    }

    return description;
  });

  private sanitizeContent(content: string): string {
    // remove new lines and extra spaces
    content = content.replace(/\s+/g, ' ').trim();
    // remove HTML tags
    content = content.replace(/<[^>]*>?/gm, '');

    return content;
  }

  readTime = computed(() => {
    const post = this.post();
    if (post == null) {
      return '';
    }

    const content = post.content?.toString();

    const words = content!.split(' ').length;
    const minutes = Math.ceil(words / 150);

    return `${minutes} min read`;
  });

  constructor() {
    effect(() => {
      const post = this.post();
      if (post == null) {
        return;
      }

      const description = this.calculatePostDescription();
      this.headerService.updateMetaOg({
        title: `${post.attributes.title} - ${description}...`,
        description: `${description}...`,
        coverImage: post.attributes.coverImage || '',
        url: this.postUrl(),
      });
    });
  }
}
