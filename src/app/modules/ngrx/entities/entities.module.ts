import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { PlanetsService } from '../../../services/planets.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
  ],
})
export class EntitiesModule {
  constructor(
    entityDataService: EntityDataService,
    planetsService: PlanetsService,
  ) {
    entityDataService.registerService('Planets', planetsService);
  }
}
