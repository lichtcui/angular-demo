import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStoreModule } from '@store/store.module';
import { setForm } from '@store/actions/form.actions';

@Component({
  selector: 'app-home',
  template: `
    <div class="container mt-4 mb-5 form">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['.form{max-width: 600px}'],
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private store$: Store<AppStoreModule>
  ) {
    this.route.data.subscribe(
      ({ form: [accounts, accountTypes, currencies] }) => {
        this.store$.dispatch(
          setForm({ form: { accounts, accountTypes, currencies } })
        );
      }
    );
  }
}
