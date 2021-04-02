import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDataServiceConfig, EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { environment } from '../../../../environments/environment';
import { PlanetsService } from '../../../services/planets.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.planetsURL
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [{provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig}],
})
export class EntitiesModule {
  constructor(
    entityDataService: EntityDataService,
    planetsService: PlanetsService,
  ) {
    entityDataService.registerService('Planets', planetsService);
  }
}
