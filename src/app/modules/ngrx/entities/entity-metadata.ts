import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Planets: {}
};

// export const pluralNames = { Planets: 'planets' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  // pluralNames
};
