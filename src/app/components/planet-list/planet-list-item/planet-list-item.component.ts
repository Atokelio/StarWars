import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../../../interfaces/planet.interface';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.scss']
})
export class PlanetListItemComponent implements OnInit {

  @Input() planet: Planet;
  @Output() onToggle: EventEmitter<Planet> = new EventEmitter<Planet>();

  constructor() {
  }

  ngOnInit(): void {
  }

  togglePlanet(): void {
    this.onToggle.emit(this.planet);
  }
}
