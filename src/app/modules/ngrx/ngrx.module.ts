import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlanetsEffects } from './effects/planets.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlanetsEffects])
  ]
})
export class NgrxModule { }
