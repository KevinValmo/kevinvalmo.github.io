import { Component } from '@angular/core';
import TagBadgeComponent from '../../core/components/tag-badge.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  template: `
    <div class="ml-auto mr-auto max-w-3xl">
      <div class="flex flex-col items-center">
        <div class="text-3xl font-bold mt-4">
          Kevin Valmorbida
          <span class="text-gray-600 font-normal">
            - Full Stack Software Engineer
          </span>
        </div>
        <div class="w-full text-sm mt-2 text-yellow-500 italic text-right">
          Updated at 2024/09/10
        </div>
      </div>

      <div class="mt-6 flex flex-col gap-2 text-justify">
        <div>
          <div class="text-2xl font-bold border-b-4 border-base-300">
            Career Objective
          </div>
          <div class="mt-2">
            To leverage my skills as a
            <label class="text-hl">full-stack software engineer</label>, with a
            focus on <label class="text-hl">team management</label>,
            problem-solving, and delivering high-quality solutions on time.
          </div>
        </div>
        <div>
          <div class="text-2xl font-bold border-b-4 border-base-300">About</div>
          <div class="mt-2">
            I'm a skilled Software Engineer with 5+ years of experience in
            <label class="text-hl">back-end</label> and
            <label class="text-hl">front-end development</label>, specializing
            in <label class="text-hl">SQL databases</label> and
            <label class="text-hl">real-time data integration</label>. I have a
            label grasp of
            <label class="text-hl">software architecture</label> and the
            <label class="text-hl">software life cycle</label>. My communication
            skills help me engage with clients and manage projects effectively.
            I also write knowledge posts on my tech stack (C#, .NET, TypeScript,
            Angular) on <label class="text-hl">LinkedIn</label>, growing a
            community of
            <label class="text-hl">2.5k+ followers</label>
            (
            <a href="https://www.linkedin.com/in/kevinvalmorbida/">
              follow me 😜
            </a>
            ).
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Education
            </div>
            <div class="mt-2">
              2007 - 2013 - Diploma <br />
              I.T.I.S. V.E.M (Technical)
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Language
            </div>
            <div class="mt-2">
              Italian - Native <br />
              English - B2
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Major Skills
            </div>
            <div class="mt-2 flex flex-wrap gap-2">
              @for (ms of majorSkills; track $index) {
              <span class="badge badge-neutral">{{ ms }}</span>
              }
            </div>
          </div>
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Skills
            </div>
            <div class="mt-2 flex flex-wrap gap-2 max-h-24 overflow-y-auto">
              @for (s of skills; track $index) {
              <span class="badge badge-neutral text-nowrap">{{ s }}</span>
              }
            </div>
          </div>
        </div>
        <div>
          <div class="text-3xl font-bold border-b-4 border-base-300 text-hl">
            Experience
          </div>
          <div class="flex flex-col gap-4 mt-4">
            <div class="pb-4 border-b-4 border-dotted">
              <div class="flex justify-between flex-wrap gap-2">
                <div class="flex-1">
                  <div class="text-sm">
                    Dec 2023 - Present •
                    <label class="font-bold"></label>
                  </div>
                  <div class="font-bold">Full Stack Software Engineer</div>
                </div>
                <div class="flex-1 text-end">
                  <div class="text-sm">
                    <a href="https://www.avanade.com/"> Avanade </a>
                  </div>
                  <div class="font-bold text-lg italic">
                    C# | .Net | Typescript | Angular | Azure
                  </div>
                </div>
              </div>
              <ul class="list-disc mt-4 pl-5 ">
                <li>
                  Developed new features and
                  <label class="text-hl">
                    enhancements for live projects
                  </label>
                  while supporting the team.
                </li>

                <li>
                  Ensured optimal performance, troubleshooting, and alignment
                  with business goals in
                  <label class="text-hl">
                    financial and banking applications.
                  </label>
                </li>
              </ul>
            </div>
            <div class="pb-4 border-b-4 border-dotted">
              <div class="flex justify-between flex-wrap gap-2">
                <div class="flex-1">
                  <div class="text-sm">
                    Sep 2021 - Dec 2023 •
                    <label class="font-bold">2 years 1 month</label>
                  </div>
                  <div class="font-bold">Full Stack Software Engineer</div>
                </div>
                <div class="flex-1 text-end">
                  <div class="text-sm">
                    <a href="https://www.qualitas.it/">
                      Qualitas Informarica
                    </a>
                  </div>
                  <div class="font-bold ">C# | .Net | Typescript | Angular</div>
                </div>
              </div>
              <ul class="list-disc mt-4 pl-5 ">
                <li>
                  <label class="text-hl">Design and implementation </label>
                  of a Full-Stack web application (Angular 15 and .Net 7) with
                  database integration, real-time signals, and communication
                  with proprietary or standard external environments.
                </li>
                <li>
                  Developed and supported a
                  <label class="text-hl">
                    fully customized .net 7 (WinForm)
                  </label>
                  application for a installer.
                </li>
                <li>
                  Enter a company with a consolidated product and an already
                  formed development team to which a functional product leader
                  refers.
                </li>
                <li>
                  Management and completion of
                  <label class="text-hl">bugs, features</label> or new features
                  with a deadline.
                </li>
                <li>
                  <label class="text-hl">English </label> is the main language
                  used by the development team.
                </li>
              </ul>
            </div>
            <div class="pb-4 border-b-4 border-dotted">
              <div class="flex justify-between flex-wrap gap-2">
                <div class="flex-1">
                  <div class="text-sm">
                    Dec 2019 - Aug 2021 •
                    <label class="font-bold"> ~ 2 year </label>
                  </div>
                  <div class="font-bold">Full Stack Software Engineer</div>
                </div>
                <div class="flex-1 text-end">
                  <div class="text-sm">
                    <a href="https://www.mair-research.com/"> Mair Research </a>
                  </div>
                  <div class="font-bold ">C# | .Net | Blazor</div>
                </div>
              </div>
              <ul class="list-disc mt-4 pl-5 ">
                <li>
                  <label class="text-hl">Design and development </label> of the
                  configurable server architecture, DAL level data management,
                  implementation of <label class="text-hl"> Web API</label>,
                  communication with <label class="text-hl">PLC</label> mainly
                  using the OPC UA standard and communication based on
                  <label class="text-hl"> real-time</label> protocols.
                </li>
                <li>
                  <label class="text-hl">Design and development</label> of the
                  Front-End Web client architecture usingRazor Pages, HTML, CSS
                  and Blazor, with the use of external and ad hoc components,
                  with <label class="text-hl">real time</label> information
                  exchange.
                </li>
                <li>
                  <label class="text-hl"> SQL database design</label> and
                  implementation.
                </li>
                <li>
                  Implementation of
                  <label class="text-hl">HMI software</label> for Automation and
                  Industry 4.0.
                </li>
              </ul>
            </div>
            <div>
              <div class="flex justify-between flex-wrap gap-2">
                <div class="flex-1">
                  <div class="text-sm">
                    Jan 2018 - Dec 2019 •
                    <label class="font-bold"> 2 year </label>
                  </div>
                  <div class="font-bold">Application Consultant</div>
                </div>
                <div class="flex-1 text-end">
                  <div class="text-sm">
                    <a href="https://www.qualitas.it/">
                      Qualitas Informarica
                    </a>
                  </div>
                  <div class="font-bold ">C# | .Net | Blazor</div>
                </div>
              </div>
              <ul class="list-disc mt-4 pl-5 ">
                <li>
                  Management of proprietary NetPro applications (Server, Client,
                  communications via ODBC).
                </li>
                <li>
                  NetPro software installation and configuration for production
                  management
                </li>
                <li>
                  <label class="text-hl">Team work of 2 to 5 </label> people
                  consisting of project leader and consultant with project
                  analysis.
                </li>
                <li>
                  <label class="text-hl">
                    Consultancy for various or particular customer requests,
                    implementation, development and completion.
                  </label>
                </li>

                <li>
                  Implementation and maintenance of projects concerning
                  <label class="text-hl">Industry 4.0 and Automation.</label>
                </li>
                <li>
                  <label class="text-hl">SQL database management </label> and
                  and intermediate complexity querying.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Achievements
            </div>
            <ul class="list-disc mt-4 pl-5 ">
              <li>Growing LinkedIn community (2.5k+ followers)</li>
              <li>9+ year as blood donors</li>
            </ul>
          </div>
          <div>
            <div class="text-2xl font-bold border-b-4 border-base-300">
              Certifications
            </div>
            <ul class="list-disc mt-4 pl-5 ">
              <li>Microsoft Azure Fundamentals (AZ 900)</li>
              <li>Microsoft Developer Associate (AZ 204)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class CvComponent {
  public majorSkills = [
    'C#',
    '.NET',
    'Blazor',
    'TypeScript',
    'Angular',
    'Azure',
  ];

  public skills = [
    '.Net 8',
    '.Net Core',
    '.Net WinForms',
    'Entity Framework Core',
    'SignalR',
    'Javascript',
    'Angular 18',
    'HTML',
    'CSS',
    'Tailwind',
    'SQL',
    'Git',
    'GitHub',
    'Rest API',
    'JSON',
    'MQTT',
    'Azure',
  ];
}
