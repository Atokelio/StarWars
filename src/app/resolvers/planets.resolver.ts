import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PlanetsActions } from '../modules/ngrx/actions';
import { Store } from '@ngrx/store';

@Injectable({providedIn: 'root'})

export class PlanetsResolver implements Resolve<any> {
  constructor(
    private readonly store: Store
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): null {
    this.store.dispatch(PlanetsActions.loadPlanets());
    return null;
  }
}
