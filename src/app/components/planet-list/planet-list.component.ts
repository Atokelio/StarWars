import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
import {Store} from '@ngrx/store';
import { planetsFeatureKey } from '../../store/reducers/planets.reducer';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  providers: [planetsProvider, planetsLoadingProvider, planetsErrorProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListComponent implements OnInit {
  planets$: Observable<Planet[]>;

  constructor(
    private readonly store: Store<AppState>,
    private readonly planetsService: PlanetsService,
    // @Inject(PLANETS) public readonly planets$: Observable<Planet[]>,
    @Inject(PLANETS_LOADING) public readonly loading$: Observable<boolean>,
    @Inject(PLANETS_ERROR) public readonly error$: Observable<HttpErrorResponse>,
  ) {
  }

  ngOnInit(): void {
    this.planets$ = this.store.select(planetsFeatureKey).pipe(
      map((state) => state.planets)
    );
  }

  togglePlanet(planet: Planet): void {
    this.planetsService.togglePlanet(planet);
  }
}
