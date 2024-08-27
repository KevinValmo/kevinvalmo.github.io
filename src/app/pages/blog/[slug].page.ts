import { Component, inject } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe, DatePipe } from '@angular/common';

import PostAttributes from '../../post-attributes';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from "../../core/components/tag-badge.component";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent, DatePipe, TagBadgeComponent],
  template: `
    @if (post$ | async; as post) {
    <article class="max-w-7xl">
      <div
        class="rounded-3xl mb-4 w-full h-96 bg-cover bg-center"
        style="background-image: url('/{{ post.attributes.coverImage }}')"
      ></div>

      <div class="flex flex-col gap-2 ">
        <div class="text-4xl font-bold">{{ post.attributes.title }}</div>
        <div class="italic">{{ post.attributes.description }}</div>
        <div class="flex gap-2 ml-auto mr-0 flex-wrap">
          @for (tag of post.attributes.tags.split(','); track $index) {
            <kvsrc-tag-badge [tag]="tag" />
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
