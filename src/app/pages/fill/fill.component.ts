import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account, AccountType, Currency } from '@interfaces/form';
import { FormService } from '@services/form.service';

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

  accountTypes: AccountType[];
  currencies: Currency[];
  account: Account;

  constructor(private formServe: FormService) {
    this.accountTypes = formServe.accountTypes;
    this.currencies = formServe.currencies;
    this.account = formServe.getAccount();
    const { accountType, currency } = formServe.status;
    this.form.patchValue({ accountType, currency });
  }

  onNext() {
    const { accountType, currency } = this.form.value;
    this.formServe.handleStatusChange({ accountType, currency });
  }

  get disabled(): boolean {
    const { accountType, currency } = this.form.value;
    return !accountType || !currency;
  }
}
