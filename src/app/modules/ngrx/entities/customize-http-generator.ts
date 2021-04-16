import { rootUrls } from './root-urls';
import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, Pluralizer, DefaultPluralizer, HttpResourceUrls, normalizeRoot } from '@ngrx/data';


@Injectable()
export class CustomizeHttpUrlGenerator extends DefaultHttpUrlGenerator {

  constructor(
    private readonly aPluralizer: Pluralizer = new DefaultPluralizer(undefined)
  ) {
    super(aPluralizer);
  }

  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    let resourceUrls: HttpResourceUrls = this.knownHttpResourceUrls[entityName];

    if (!resourceUrls) {
      if (rootUrls.hasOwnProperty(entityName)) {
        root = rootUrls[entityName];
      }


      const nRoot: string = normalizeRoot(root);
      const url: string = `${nRoot}/${entityName}/`.toLowerCase();

      resourceUrls = {
        entityResourceUrl: url,
        collectionResourceUrl: url
      };

      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }

    return resourceUrls;
  }
}
