import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account, AccountType, Currency } from '@interfaces/form';
import { select, Store } from '@ngrx/store';
import { setAccountType, setCurrency } from '@store/actions/form.actions';
import {
  getFormData,
  getFormReducer,
  getFormStatus,
} from '@store/selectors/form.selectors';
import { AppStoreModule } from '@store/store.module';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.sass'],
})
export class FillComponent {
  form = new FormGroup({
    accountType: new FormControl(0),
    currency: new FormControl(0),
  });

  accounts: Account[];
  accountTypes: AccountType[];
  currencies: Currency[];
  account: Account;

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accounts = res.accounts;
      this.accountTypes = res.accountTypes;
      this.currencies = res.currencies;
    });
    formStore$
      .pipe(select(getFormStatus))
      .subscribe(({ account, accountType, currency }) => {
        this.account = this.accounts.find((i) => i.id === account);
        this.form.setValue({ accountType, currency });
      });
  }

  onNext() {
    const { accountType, currency } = this.form.value;
    this.store$.dispatch(setAccountType({ accountType }));
    this.store$.dispatch(setCurrency({ currency }));
  }
}
