import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    template: `
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
    imports: [FontAwesomeModule]
})
export class FooterComponent {
  protected readonly linkeinIcon = faLinkedin;
  protected readonly githubIcon = faGithub;
}
