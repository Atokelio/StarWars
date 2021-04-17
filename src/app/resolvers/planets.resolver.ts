import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { Entities } from '../modules/ngrx/entities/entities';

@Injectable({providedIn: 'root'})

export class PlanetsResolver implements Resolve<any> {
  constructor(
    private readonly store: Store,
    private readonly entityActionFactory: EntityActionFactory
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): null {
    this.store.dispatch(
      this.entityActionFactory.create(Entities.Planets, EntityOp.QUERY_ALL)
    );
    return null;
  }
}
