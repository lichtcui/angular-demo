import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from '@interfaces/form';
import { select, Store } from '@ngrx/store';
import { setAccount } from '@store/actions/form.actions';
import {
  getFormStatus,
  getFormData,
  getFormReducer,
} from '@store/selectors/form.selectors';
import { AppStoreModule } from '@store/store.module';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent {
  form = new FormGroup({
    account: new FormControl(0),
  });

  accounts: Account[] = [];

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accounts = res.accounts;
    });
    formStore$.pipe(select(getFormStatus)).subscribe(({ account }) => {
      this.form.setValue({ account });
    });
  }

  onNext() {
    const { account } = this.form.value;
    this.store$.dispatch(setAccount({ account }));
  }
}
