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
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass'],
})
export class ConfirmationComponent {
  accounts: Account[];
  accountTypes: AccountType[];
  currencies: Currency[];

  accountType: AccountType;
  currency: Currency;

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accountTypes = res.accountTypes;
      this.currencies = res.currencies;
    });
    formStore$
      .pipe(select(getFormStatus))
      .subscribe(({ accountType, currency }) => {
        this.accountType = this.accountTypes.find((i) => i.id === accountType);
        this.currency = this.currencies.find((i) => i.id === currency);
      });
  }

  onNext() {
    console.log('next...');
  }
}
