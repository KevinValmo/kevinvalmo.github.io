import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class=" ml-auto mr-auto max-w-3xl">
      <div class="">
        <h2 class="text-2xl font-semibold mt-4">
          Kevin
          <span class="text-gray-600 mt-2 text-sm align-middle"
            >- The Web Developer</span
          >
        </h2>
      </div>

      <div class="mt-6 text-justify flex flex-col gap-2">
        <div>
          Hello! I'm Kevin and I solve problems with code. Oh, and I'm a web
          developer. I'm passionate about web developmnet and I love to learn
          new things.
        </div>
        <div>
          Below please find a list of technologies I've been working with
          lately. Just click on the badges to see if I've written any posts
          about them.
          <div class="divider"></div>
          <div class="flex gap-2 mt-2">
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              C#
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              ASP.NET Core
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              Typescript
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              Angular
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              Azure
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              Docker
            </div>
            <div
              class="py-3 hover:cursor-pointer hover:badge-accent transition-all duration-300 badge badge-neutral"
            >
              SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class AboutComponent {}
