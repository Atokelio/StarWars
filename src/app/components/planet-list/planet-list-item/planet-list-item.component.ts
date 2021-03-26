import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Planet} from '../../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetListItemComponent {

  @Input() planet: Planet;
  @Output() onToggle: EventEmitter<Planet> = new EventEmitter<Planet>();

  togglePlanet(): void {
    this.onToggle.emit(this.planet);
  }
}
