import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PlanetsEffects } from './effects/planets.effect';
import { EntitiesModule } from './entities/entities.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlanetsEffects]),
    EntitiesModule,
    StoreDevtoolsModule.instrument()
  ]
})
export class NgrxModule {
}
