import { Component } from '@angular/core';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';

import PostAttributes from '../../post-attributes';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    @if (post$ | async; as post) {
    <article>
      <img class="post__image" [src]="post.attributes.coverImage" />
      <analog-markdown [content]="post.content" />
    </article>
    }
  `,
})
export default class BlogPostComponent {
  readonly post$ = injectContent<PostAttributes>('slug');
}
