import { Component, inject } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, DatePipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import { NavigatorService } from '../../core/services/navigator.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent, DatePipe],
  template: `
    @if (post$ | async; as post) {
    <article>
      <img class="rounded-3xl mb-4" [src]="'/' + post.attributes.coverImage" />

      <div class="flex flex-col gap-2 ">
        <div class="text-4xl font-bold">{{ post.attributes.title }}</div>
        <div class="italic">{{ post.attributes.description }}</div>
        <div class="flex gap-2 ml-auto mr-0">
          @for (tag of post.attributes.tags.split(','); track $index) {
          <div
            class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            (click)="navigator.navigateToBlogPostByTag($event, tag)"
            title="Back to blog posts with this tag 🏷️"
          >
            {{ tag }}
          </div>
          }
        </div>
        <div class="text-gray-600 italic text-right">
          {{ post.attributes.date | date : 'mediumDate' }}
        </div>
      </div>
      <div class="divider"></div>
      <analog-markdown class="prose" [content]="post.content" />
    </article>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');

  readonly navigator = inject(NavigatorService);
}
