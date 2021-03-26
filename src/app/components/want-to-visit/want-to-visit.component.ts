import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WISH_LIST, wishListProvider } from '../planet-list/providers';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.scss'],
  providers: [wishListProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WantToVisitComponent {
  constructor(
    @Inject(WISH_LIST) public readonly wishList$: Observable<string[]>
  ) {
  }
}
