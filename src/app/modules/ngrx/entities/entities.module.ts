import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHttpUrlGenerator, EntityDataModule, EntityDataService, HttpUrlGenerator } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { PlanetsService } from '../../../services/planets.service';
import { CustomizeHttpUrlGenerator } from './customize-http-generator';
import { Entities } from './entities';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [
    { provide: HttpUrlGenerator, useClass: CustomizeHttpUrlGenerator },
    { provide: DefaultHttpUrlGenerator, useClass: CustomizeHttpUrlGenerator },
  ],
})
export class EntitiesModule {
  constructor(
    entityDataService: EntityDataService,
    planetsService: PlanetsService,
  ) {
    entityDataService.registerService(Entities.Planets, planetsService);
  }
}
