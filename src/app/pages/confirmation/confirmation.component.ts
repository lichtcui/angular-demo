import { Component } from '@angular/core';
import { AccountType, Currency, Status } from '@interfaces/form';
import { FormService } from '@services/form.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass'],
})
export class ConfirmationComponent {
  accountType: AccountType;
  currency: Currency;

  status: Status;

  constructor(private formServe: FormService) {
    this.accountType = formServe.getAccountType();
    this.currency = formServe.getCurrency();
    this.status = {
      account: this.formServe.account,
      accountType: this.formServe.accountType,
      currency: this.formServe.currency,
    };
  }

  onNext() {
    console.log(this.status);
  }

  get disabled(): boolean {
    const { account, accountType, currency } = this.status;
    return !account || !accountType || !currency;
  }
}
