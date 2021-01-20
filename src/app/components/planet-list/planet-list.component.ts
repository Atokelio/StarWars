import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Observable} from 'rxjs';
import {Planet} from '../../interfaces/planet.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {
  PLANETS,
  PLANETS_LOADING,
  planetsLoadingProvider,
  planetsProvider,
  planetsErrorProvider,
  PLANETS_ERROR
} from './providers';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  providers: [planetsProvider, planetsLoadingProvider, planetsErrorProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListComponent {

  constructor(
    private readonly planetsService: PlanetsService,
    @Inject(PLANETS) public readonly planets$: Observable<Planet[]>,
    @Inject(PLANETS_LOADING) public readonly loading$: Observable<boolean>,
    @Inject(PLANETS_ERROR) public readonly error$: Observable<HttpErrorResponse>,
  ) {
  }

  togglePlanet(planet: Planet): void {
    this.planetsService.togglePlanet(planet);
  }
}
