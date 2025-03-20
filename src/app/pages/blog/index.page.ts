import { Component, inject, signal } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { PostAttributes } from '../../types';

@Component({
    selector: 'app-blog',
    imports: [RouterLink, DatePipe, TagBadgeComponent],
    template: `
    <div class="flex flex-wrap gap-4 justify-center">
      @for (post of posts(); track post.attributes.slug) {
      <div
        class="card max-w-64 p-2 bg-base-200 outline-2 outline outline-base-300 hover:cursor-pointer hover:brightness-110 transition-all duration-300"
        [routerLink]="['/blog/', post.attributes.slug]"
      >
        <div
          class="p-2 bg-cover bg-center h-32 rounded-xl"
          style="background-image: url({{ post.attributes.coverImage }});"
        ></div>
        <div class="card-body p-2">
          <h2 class="card-title">{{ post.attributes.title }}</h2>
          <p>{{ post.attributes.description }}</p>
          <div class="flex flex-wrap gap-2">
            @for (tag of post.attributes.tags.split(','); track $index) {
            <kvsrc-tag-badge [tag]="tag" />
            }
          </div>
        </div>
        <div class="text-xs text-gray-600 font-bold italic text-right">
          {{ post.attributes.date | date : 'mediumDate' }}
        </div>
      </div>
      }
    </div>
  `
})
export default class BlogComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly router = inject(Router);
  protected readonly navigator = inject(NavigatorService);
  private tagQueryString = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('tag')))
  );

  protected readonly posts = signal(
    injectContentFiles<PostAttributes>((post) => {
      const tagQueryString = this.tagQueryString();
      if (tagQueryString == null) return true;

      return post.attributes.tags
        .toLowerCase()
        .includes(tagQueryString.toLowerCase());
    })
  );
}
