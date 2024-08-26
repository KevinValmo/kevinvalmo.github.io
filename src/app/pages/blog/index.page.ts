import { Component } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import PostAttributes from '../../post-attributes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="grid grid-flow-col  gap-4">
      @for (post of posts;track post.attributes.slug) {
      <div
        class="card  bg-base-200 shadow-xl h-72 w-80 hover:cursor-pointer hover:shadow-2xl transition-all"
        [routerLink]="['/blog/', post.attributes.slug]"
      >
        <div
          class="p-2 bg-cover bg-center h-32 rounded-t-xl"
          style="background-image: url({{ post.attributes.coverImage }});"
        ></div>
        <div class="card-body">
          <h2 class="card-title">{{ post.attributes.title }}</h2>
          <p>{{ post.attributes.description }}</p>
          <div class="flex flex-wrap gap-2">
            @for (tag of post.attributes.tags.split(','); track $index) {
            <div class="badge badge-primary">{{ tag }}</div>
            }
          </div>
        </div>
      </div>
      }
    </div>
  `,
})
export default class BlogComponent {
  readonly posts = injectContentFiles<PostAttributes>();
}
