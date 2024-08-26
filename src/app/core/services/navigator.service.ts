import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatorService {
  private router = inject(Router);

  public navigateToBlogPostByTag(event: Event, tag: string) {
    event.stopPropagation();
    this.router.navigate(['/blog'], { queryParams: { tag } });
  }
}
