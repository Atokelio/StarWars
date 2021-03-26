import { Injectable } from '@angular/core';
import { PlanetsService } from '../../../services/planets.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PlanetsActions } from '../actions';
import { Planet } from '../../../interfaces/planet.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PlanetsEffects {

  loadPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadPlanets),
    switchMap(() => this.planetsService.decoratePlanets().pipe(
      map((planets: Planet[]) => PlanetsActions.planetsLoaded({planets})),
      catchError((err: HttpErrorResponse) => of(PlanetsActions.planetsError(err)))
    ))
    )
  );

  loading$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadPlanets),
    map(() => PlanetsActions.planetsLoading({loading: true})))
  );

  loadingFinish$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.planetsLoaded, PlanetsActions.planetsError),
    map(() => PlanetsActions.planetsLoading({loading: false})))
  );

  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService
  ) {
  }
}
