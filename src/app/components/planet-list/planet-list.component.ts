import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  loading = false;

  constructor(public planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    this.planetsService.fetchPlanets();
  }
}
