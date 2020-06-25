import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStoreModule } from '../../store/store.module';
import { setFormData } from '../../store/actions/form.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppStoreModule>
  ) {
    this.route.data.subscribe(
      ({ form: [accounts, accountTypes, currencies] }) => {
        this.store$.dispatch(
          setFormData({ form: { accounts, accountTypes, currencies } })
        );
      }
    );
  }
}
