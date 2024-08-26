import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="ml-auto mr-auto max-w-3xl">
      <div>
        <h2 class="text-2xl font-semibold mt-4">
          Kevin
          <span class="text-gray-600 mt-2 text-sm align-middle"
            >- A Web Developer</span
          >
        </h2>
      </div>

      <div class="mt-6 flex flex-col gap-2">
        <div>I solve problems with code. Oh, and I'm a web developer.</div>
        <div>
          Below please find a list of technologies I've been working with
          lately. Just click on the badges to see if I've written any posts
          about them.
          <div class="divider"></div>
          <div class="flex gap-2 mt-2 flex-wrap">
            @for (technologie of technologies; track $index) {
            <div
              class="py-3 hover:cursor-pointer hover:badge-primary transition-all duration-300 badge badge-neutral"
            >
              {{ technologie }}
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class AboutComponent {
  protected readonly technologies = [
    'C#',
    'ASP.NET Core',
    'Typescript',
    'Angular',
    'Azure',
    'Docker',
    'SQL',
  ];
}
