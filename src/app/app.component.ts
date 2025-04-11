import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HeadersComponent } from './core/components/headers.component';
import { FooterComponent } from './core/components/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, HeadersComponent, FooterComponent],
  template: `
    <app-headers />
    <div
      class="flex mt-4 justify-center p-4 max-w-3xl justify-self-center"
    >
      <router-outlet></router-outlet>
    </div>
    <app-footer />
  `,
})
export class AppComponent {
  protected readonly linkeinIcon = faLinkedin;
  protected readonly githubIcon = faGithub;
}
