import { Injectable } from '@angular/core';
import {
  Account,
  AccountType,
  Currency,
  OptionalStatus,
  Status,
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
  status: Status;

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accounts = res.accounts;
      this.accountTypes = res.accountTypes;
      this.currencies = res.currencies;
    });
    formStore$
      .pipe(select(getFormStatus))
      .subscribe((res) => (this.status = res));
  }

  getAccount() {
    return this.accounts.find((i) => i.id === this.status.account);
  }
  getAccountType() {
    return this.accounts.find((i) => i.id === this.status.accountType);
  }
  getCurrency() {
    return this.accounts.find((i) => i.id === this.status.currency);
  }

  handleStatusChange(nextStatus: OptionalStatus) {
    const status = { ...this.status, ...nextStatus };
    this.store$.dispatch(setStatus({ status }));
  }
}
