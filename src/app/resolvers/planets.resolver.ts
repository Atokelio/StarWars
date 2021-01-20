import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PlanetsService} from '../services/planets.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PlanetsResolver implements Resolve<any> {
  constructor(
    private readonly planetsService: PlanetsService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): null {
    this.planetsService.fetchPlanets();
    return null;
  }
}
