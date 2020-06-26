import { Component } from '@angular/core';
import { AccountType, Currency } from '@interfaces/form';
import { FormService } from '@services/form.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass'],
})
export class ConfirmationComponent {
  accountType: AccountType;
  currency: Currency;

  constructor(private formServe: FormService) {
    this.accountType = formServe.getAccountType();
    this.currency = formServe.getCurrency();
  }

  onNext() {
    const status = {
      account: this.formServe.account,
      accountType: this.formServe.accountType,
      currency: this.formServe.currency,
    };
  }
}
