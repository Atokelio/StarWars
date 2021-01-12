import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PlanetsService} from '../../services/planets.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WantToVisitComponent implements OnInit {
  wishlist$: Observable<string[]>;

  constructor(private readonly planetsService: PlanetsService) {
    this.wishlist$ = planetsService.wishlist$;
  }

  ngOnInit(): void {
  }

}
