import { Component, model, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Themes, ToolbarLink } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  template: `
    <div
      class="sticky top-0 backdrop-blur-xl bg-base-100/50 py-2 px-8 border-b-2 border-base-300 z-50"
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
    <div class="flex mt-4 justify-center p-4 ">
      <router-outlet></router-outlet>
    </div>
    <footer class="footer footer-center bg-base-300 text-base-content p-4 ">
      <aside class="w-full flex justify-between flex-wrap">
        <div>Kevin Valmorbida - A Web Developer</div>
        <div class="flex gap-4">
          <a
            href="https://www.linkedin.com/in/kevinvalmorbida/"
            class="btn btn-square btn-ghost bg-base-100"
          >
            <fa-icon [icon]="linkeinIcon"></fa-icon>
          </a>
          <a
            href="https://github.com/KevinValmo"
            class="btn btn-square btn-ghost bg-base-100"
          >
            <fa-icon [icon]="githubIcon"></fa-icon>
          </a>
        </div>
      </aside>
    </footer>
  `,
})
export class AppComponent {
  protected readonly linkeinIcon = faLinkedin;
  protected readonly githubIcon = faGithub;

  links = signal<ToolbarLink[]>([
    { name: 'Blog', path: 'blog', icon: '📖' },
    { name: 'About', path: 'about', icon: '🧑‍🦰' },
    { name: 'Services', path: 'services', icon: '🛠️' },
  ]);

  theme = model<Themes>('light');
}
