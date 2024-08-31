import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, DatePipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import ShareButtonsComponent from '../../core/components/share-buttons.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderService } from '../../core/services/header.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    AsyncPipe,
    MarkdownComponent,
    DatePipe,
    TagBadgeComponent,
    ShareButtonsComponent,
    FontAwesomeModule,
  ],
  template: `
    @let localPost = post(); @if (localPost) {
    <article class="max-w-7xl">
      <div
        class="rounded-3xl mb-4 w-full h-96 bg-cover bg-center"
        style="background-image: url('/{{ localPost.attributes.coverImage }}')"
      ></div>

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

      <kvsrc-share-buttons [url]="postUrl()" [align]="'left'" />
    </article>
    } @else {
    <div class="flex justify-center items-center h-96">
      <fa-icon
        [icon]="spinnerIcon"
        class="text-4xl text-primary animate-spin"
      />
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

  private calculateDescription(): string {
    const post = this.post();
    if (post == null) {
      return '';
    }

    if (post.attributes.description.length < 100) {
      const content = post.content?.toString();
      return this.sanitizeContent(content!).slice(0, 110);
    }

    return post.attributes.description;
  }

  private sanitizeContent(content: string): string {
    return content.replace(/<[^>]*>?/gm, '');
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
      this.headerService.updateLinkedinShare({
        title: this.post()?.attributes.title || '',
        description: this.calculateDescription(),
        coverImage: this.post()?.attributes.coverImage || '',
        url: this.postUrl(),
      });
    });
  }
}
