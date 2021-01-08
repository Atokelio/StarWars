import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.scss']
})
export class WantToVisitComponent implements OnInit {

  constructor(public planetsService: PlanetsService) { }

  ngOnInit(): void {
  }

}
