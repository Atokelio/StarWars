import { Injectable } from '@angular/core';
import { Planet } from '../../interfaces/planet.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { PlanetsActions } from '../../store/actions';
import { planetsFeatureKey, PlanetsState } from '../../store/reducers/planets.reducer';
import { first } from 'rxjs/operators';

@Injectable()
export class PlanetsListFacade {
  constructor(
    private readonly store: Store<AppState>
  ) {
  }

  toggle({name}: Planet): void {
    this.store.select(planetsFeatureKey)
      .pipe(
        first()
      )
      .subscribe((store: PlanetsState) => {

        let wishList: string[] = [...store.wishList];
        const planets: Planet[] = [...store.planets];

        if (wishList.includes(name)) {
          wishList = wishList.filter(planetName => planetName !== name);
        } else {
          wishList.push(name);
        }

        this.store.dispatch(
          PlanetsActions.planetsToggle({wishList})
        );
      });
  }
}
