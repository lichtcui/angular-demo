import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStoreModule } from '../../store/store.module';
import { Account } from '../../interfaces/form';
import {
  getFormReducer,
  getFormData,
  getAccount,
} from '../../store/selectors/form.selectors';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent {
  accounts: Account[] = [];
  account: number = 0;

  constructor(private store$: Store<AppStoreModule>) {
    const formStore$ = this.store$.pipe(select(getFormReducer));
    formStore$.pipe(select(getFormData)).subscribe((res) => {
      this.accounts = res.accounts;
    });
    formStore$
      .pipe(select(getAccount))
      .subscribe((res) => (this.account = res));
  }

  onNext() {}
}
