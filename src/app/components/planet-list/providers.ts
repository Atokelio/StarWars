import { InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../../interfaces/planet.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../modules/ngrx/reducers';
import { planetsFeatureKey } from '../../modules/ngrx/reducers/planets.reducer';
import { wishListFeatureKey } from '../../modules/ngrx/reducers/wish-list.reducer';
import { map, tap } from 'rxjs/operators';
import { EntitySelectorsFactory } from '@ngrx/data';
import { Entities } from '../../modules/ngrx/entities/entities';

export const PLANETS: InjectionToken<Observable<Planet[]>> = new InjectionToken<Observable<Planet[]>>(
  'planets'
);

export const planetsProvider: Provider = {
  provide: PLANETS,
  useFactory: (store: Store<AppState>, entitySelectorsFactory: EntitySelectorsFactory) => store.pipe(
    select(
      entitySelectorsFactory.create(Entities.Planets).selectEntities
    )
  ),
  deps: [Store, EntitySelectorsFactory]
};

export const PLANETS_LOADING: InjectionToken<Observable<boolean>> = new InjectionToken<Observable<boolean>>(
  'planetsLoading'
);

export const planetsLoadingProvider: Provider = {
  provide: PLANETS_LOADING,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(
    map(({loading}) => loading)
  ),
  deps: [Store]
};

export const PLANETS_ERROR: InjectionToken<Observable<HttpErrorResponse>> = new InjectionToken<Observable<HttpErrorResponse>>(
  'planetsError'
);

export const planetsErrorProvider: Provider = {
  provide: PLANETS_ERROR,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(
    map(({error}) => error)
  ),
  deps: [Store]
};

export const WISH_LIST: InjectionToken<Observable<string[]>> = new InjectionToken<Observable<string[]>>(
  'wishList'
);

export const wishListProvider: Provider = {
  provide: WISH_LIST,
  useFactory: (store: Store<AppState>) => store.select(wishListFeatureKey).pipe(
    map(({wishList}) => wishList)
  ),
  deps: [Store]
};

export const PLANETS_SELECTED: InjectionToken<Observable<number[]>> = new InjectionToken<Observable<number[]>>(
  'planetsSelected'
);

export const planetsSelectedProvider: Provider = {
  provide: PLANETS_SELECTED,
  useFactory: (store: Store<AppState>) => store.select(planetsFeatureKey).pipe(
    map(({planetsSelected}) => planetsSelected)
  ),
  deps: [Store]
};
