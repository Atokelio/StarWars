import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanetListComponent} from './components/planet-list/planet-list.component';
import {PlanetsResolver} from './resolvers/planets.resolver';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent,
    resolve: {
      planets: PlanetsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
