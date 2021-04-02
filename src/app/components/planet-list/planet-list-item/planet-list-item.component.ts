import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Planet } from '../../../interfaces/planet.interface';
import { PLANETS_SELECTED, planetsSelectedProvider } from '../providers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss'],
  providers: [planetsSelectedProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListItemComponent {

  @Input() planet: Planet;
  @Output() onToggle: EventEmitter<Planet> = new EventEmitter<Planet>();

  constructor(
    @Inject(PLANETS_SELECTED) public readonly planetsSelected$: Observable<number[]>,
  ) {
  }

  togglePlanet(): void {
    this.onToggle.emit(this.planet);
  }
}
