import { Component, model, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FontAwesomeModule],
  template: `
    <div
      class="sticky top-0 backdrop-blur-xl bg-base-100/50 py-2 px-8 border-b-2 border-base-300 z-50"
    >
      <div class="navbar rounded-3xl bg-base-200 py-1 px-4 w-full ">
        <div class="navbar-start"></div>
        <div class="navbar-center flex">
          <ul class="menu menu-horizontal px-1 gap-2">
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
          </ul>
        </div>
        <div class="navbar-end">
          <label class="swap swap-rotate">
            <input type="checkbox" class="theme-controller" [(value)]="theme" />
            <span class="swap-off text-2xl">☀️</span>
            <span class="swap-on text-2xl">🌙</span>
          </label>
        </div>
      </div>
    </div>
    <div class="flex mt-4 justify-center p-4 ">
      <router-outlet></router-outlet>
    </div>
    <footer class="footer footer-center bg-base-300 text-base-content p-4 ">
      <aside class="w-full flex justify-between">
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

  links = signal([
    { name: 'Blog', path: 'blog', icon: '📖' },
    { name: 'About', path: 'about', icon: '🧑‍🦰' },
  ]);

  theme = model<'light' | 'dark'>('light');
}
