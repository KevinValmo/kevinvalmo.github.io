import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  document = inject(DOCUMENT);

  addUpdateHeader(metaId: string, metaValue: string): void {
    const metaElement = this.document.querySelector(`meta[name="${metaId}"]`);

    if (metaElement) {
      metaElement.setAttribute('content', metaValue);
    } else {
      const newMetaElement = this.document.createElement('meta');
      newMetaElement.setAttribute('name', metaId);
      newMetaElement.setAttribute('content', metaValue);
      this.document.head.appendChild(newMetaElement);
    }
  }

  updateMetaOg({
    title,
    description,
    coverImage,
    url,
  }: {
    title: string;
    description: string;
    coverImage: string;
    url: string;
  }): void {
    this.addUpdateHeader('ogtitle', title);

    this.addUpdateHeader('ogdescription', description);

    this.addUpdateHeader(
      'ogimage',
      `https://kevinvalmo.github.io/${coverImage}`
    );

    this.addUpdateHeader('ogurl', url);
  }
}
