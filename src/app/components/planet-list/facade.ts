import { Injectable } from '@angular/core';
import { Planet } from '../../interfaces/planet.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../modules/ngrx/reducers';
import { PlanetsActions } from '../../modules/ngrx/actions/planets';
import { planetsFeatureKey } from '../../modules/ngrx/reducers/planets.reducer';
import { first } from 'rxjs/operators';
import { WishListActions } from '../../modules/ngrx/actions/wish-list';

@Injectable({providedIn: 'root'})
export class PlanetsListFacade {
  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  toggle({id, name}: Planet): void {
    this.store
      .pipe(
        select(planetsFeatureKey),
        first()
      )
      .subscribe(() => {
        this.store.dispatch(
          PlanetsActions.planetsToggle({id})
        );
        this.store.dispatch(
          WishListActions.wishListToggle({name})
        );
      });
  }
}
