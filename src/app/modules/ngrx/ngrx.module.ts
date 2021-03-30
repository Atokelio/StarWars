import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlanetsEffects } from './effects/planets.effect';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityMetadata, pluralNames } from './entity/entity-metadata';
import { environment } from '../../../environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.planetsURL
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlanetsEffects]),
    StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot({entityMetadata, pluralNames}),
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
})
export class NgrxModule { }
