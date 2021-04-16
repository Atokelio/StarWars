import { environment } from '../../../../environments/environment';
import { Entities } from './entities';

export const rootUrls: {[entity: string]: string} = {
  [Entities.Planets]: environment.planetsURL,
};
