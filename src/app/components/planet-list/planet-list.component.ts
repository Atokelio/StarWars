import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Observable} from 'rxjs';
import {Planet} from '../../interfaces/planet.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListComponent implements OnInit {
  loading$: Observable<boolean>;
  planets$: Observable<Planet[]>;
  error$: Observable<HttpErrorResponse>;

  constructor(private readonly planetsService: PlanetsService) {
    this.planets$ = planetsService.planets$;
    this.loading$ = planetsService.loading$;
    this.error$ = planetsService.error$;
  }

  ngOnInit(): void {
    this.planetsService.fetchPlanets();
  }

  togglePlanet(planet: Planet): void {
    this.planetsService.togglePlanet(planet);
  }
}
