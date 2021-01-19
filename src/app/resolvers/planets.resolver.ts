import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Planet} from '../interfaces/planet.interface';
import {Observable} from 'rxjs';
import {PlanetsService} from '../services/planets.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class PlanetsResolver implements Resolve<Planet[]> {
  constructor(private readonly planetsService: PlanetsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Planet[]> | Promise<Planet[]> | Planet[] {
    return undefined;
  }
}
