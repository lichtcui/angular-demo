import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from '@interfaces/form';
import { FormService } from '@services/form.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: [''],
})
export class SelectComponent {
  form = new FormGroup({
    account: new FormControl(0),
  });

  accounts: Account[] = [];

  constructor(private formServe: FormService) {
    const { accounts, status } = this.formServe;
    this.accounts = accounts;
    this.form.setValue({ account: status.account });
  }

  onNext() {
    const { account } = this.form.value;
    this.formServe.handleStatusChange({ account });
  }

  get disabled(): boolean {
    const { account } = this.form.value;
    return !account;
  }
}
