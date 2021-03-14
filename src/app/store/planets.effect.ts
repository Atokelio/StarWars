import { Injectable } from '@angular/core';
import { PlanetsService } from '../services/planets.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PlanetsActions } from './actions';
import { Planet } from '../interfaces/planet.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class PlanetsEffects {

  loadPlanets$ = createEffect(() => this.actions$.pipe(
    ofType(PlanetsActions.loadPlanets),
    switchMap(() => this.planetsService.getPlanets().pipe(
      map((planets: Planet[]) => PlanetsActions.planetsLoaded({planets})),
      catchError((err: HttpErrorResponse) => of(PlanetsActions.planetsError(err)))
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private planetsService: PlanetsService
  ) {
  }
}
