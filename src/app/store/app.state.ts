import { Planet } from '../interfaces/planet.interface';

export interface AppState {
  planetsList: {
    planets: Planet[] | []
  };
}
