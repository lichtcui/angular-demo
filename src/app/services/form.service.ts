import { Injectable } from '@angular/core';
import {
  Account,
  AccountType,
  Currency,
  OptionalStatus,
} from '@interfaces/form';
import { select, Store } from '@ngrx/store';
import { setStatus } from '@store/actions/form.actions';
import {
  getFormData,
  getFormReducer,
  getFormStatus,
} from '@store/selectors/form.selectors';
import { AppStoreModule } from '@store/store.module';

@Injectable({ providedIn: 'root' })
export class FormService {
  // data
  accounts: Account[];
  accountTypes: AccountType[];
  currencies: Currency[];

  // status
  account: number;
  accountType: number;
  currency: number;

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accounts = res.accounts;
      this.accountTypes = res.accountTypes;
      this.currencies = res.currencies;
    });
    formStore$.pipe(select(getFormStatus)).subscribe((res) => {
      this.account = res.account;
      this.accountType = res.accountType;
      this.currency = res.currency;
    });
  }

  getAccount() {
    return this.accounts.find((i) => i.id === this.account);
  }
  getAccountType() {
    return this.accountTypes.find((i) => i.id === this.accountType);
  }
  getCurrency() {
    return this.currencies.find((i) => i.id === this.currency);
  }

  handleStatusChange(nextStatus: OptionalStatus) {
    const status = {
      account: this.account,
      accountType: this.accountType,
      currency: this.currency,
      ...nextStatus,
    };
    this.store$.dispatch(setStatus({ status }));
  }
}
