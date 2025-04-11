import { Component, inject, signal } from '@angular/core';
import { injectContentFiles } from '@analogjs/content';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NavigatorService } from '../../core/services/navigator.service';
import TagBadgeComponent from '../../core/components/tag-badge.component';
import { PostAttributes } from '../../types';
import { TitleComponent } from '../../core/components/title.component';

@Component({
  selector: 'app-blog',
  host: { class: 'w-full' },
  imports: [RouterLink, DatePipe, TagBadgeComponent, TitleComponent],
  template: `
    <app-title title="Blog" />
    <div class="flex flex-col flex-wrap gap-4 justify-center ">
      @for (post of posts(); track post.attributes.slug) {
      <div
        class="card card-side w-full h-40 p-2 bg-base-200 outline-2 outline outline-base-300 hover:cursor-pointer hover:brightness-110 transition-all duration-300"
        [routerLink]="['/blog/', post.attributes.slug]"
      >
        <img
          class="p-2 w-48 object-cover aspect-video rounded-3xl "
          [src]="post.attributes.coverImage"
        />
        <div class="card-body py-1 pl-4 pr-0 overflow-auto">
          <div
            class="card-title flex border-b border-base-content border-dashed pb-1"
          >
            <div class="flex-1">
              {{ post.attributes.title }}
            </div>
            <div class="text-xs text-gray-600 font-bold italic text-right">
              {{ post.attributes.date | date : 'mediumDate' }}
            </div>
          </div>
          <p>{{ post.attributes.description }}</p>
          <div class="flex flex-wrap gap-2 pt-2">
            @for (tag of post.attributes.tags.split(','); track $index) {
            <kvsrc-tag-badge [tag]="tag" />
            }
          </div>
        </div>
      </div>
      }
    </div>
  `,
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
