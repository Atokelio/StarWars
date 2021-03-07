import { Action, createReducer, on } from '@ngrx/store';

export interface Planet {
  id: number;
  name: string;
  diameter: number;
  population: number;
  inList: boolean;
}

export const initialState = {
    planets: [
      {id: 1, name: 'Tatooine', diameter: 10465, population: 200002, inList: false },
      {id: 2, name: 'Naboo', diameter: 12120, population: 45000001, inList: false }
    ]
  }
;

export function PlanetsReducer(state = initialState, action: Action): any {
  switch (action.type) {
    default:
      return state;
  }
}
