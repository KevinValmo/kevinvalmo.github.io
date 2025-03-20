import { Component, model, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Themes, ToolbarLink } from 'src/app/types';

@Component({
  selector: 'app-headers',
  standalone: true,
  template: `
    <div
      class="sticky top-0 backdrop-blur-xl bg-base-100/50 py-2 px-4 border-b-2 border-base-300 z-50"
    >
      <div
        class="flex items-center justify-center flex-wrap rounded-3xl bg-base-200 py-1 px-4 w-full "
      >
        <div class="flex justify-center">
          <ul class="menu menu-horizontal px-1 gap-2 flex justify-center">
            @for (link of links(); track link.path) {
            <li>
              <a class="bg-base-100" [routerLink]="link.path">
                {{ link.name }}
                <span class="text-xl align-middle">
                  {{ link.icon }}
                </span>
              </a>
            </li>
            }
            <li>
              <label class="swap swap-rotate bg-base-100">
                <input
                  type="checkbox"
                  class="theme-controller"
                  [(value)]="theme"
                />
                <span class="swap-off text-xl">☀️</span>
                <span class="swap-on text-xl">🌙</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  imports: [RouterLink],
})
export class HeadersComponent {
  links = signal<ToolbarLink[]>([
    { name: 'Blog', path: 'blog', icon: '📖' },
    { name: 'About', path: 'about', icon: '🧑‍🦰' },
    // { name: 'Cv', path: 'cv', icon: '📄' },
    { name: 'Services', path: 'services', icon: '🛠️' },
  ]);

  theme = model<Themes>('light');
}
