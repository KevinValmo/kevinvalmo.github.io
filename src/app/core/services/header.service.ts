import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { OgMeta } from '../../types';

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

  updateMetaOg(ogMeta: OgMeta): void {
    this.addUpdateHeader('ogtitle', ogMeta.title);

    this.addUpdateHeader('ogdescription', ogMeta.description);

    this.addUpdateHeader(
      'ogimage',
      `https://kevinvalmo.github.io/${ogMeta.coverImage}`
    );

    this.addUpdateHeader('ogurl', ogMeta.url);
  }
}
