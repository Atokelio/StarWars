import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetListItemComponent } from './components/planet-list/planet-list-item/planet-list-item.component';
import { WantToVisitComponent } from './components/want-to-visit/want-to-visit.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PlanetsListFacade } from './components/planet-list/facade';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PlanetsEffects } from './store/effects/planets.effect';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetListItemComponent,
    WantToVisitComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PlanetsEffects])
  ],
  providers: [PlanetsListFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
