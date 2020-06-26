import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from '@interfaces/form';
import { FormService } from '@services/form.service';

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

  constructor(private formServe: FormService) {
    this.accounts = this.formServe.accounts;
    this.form.setValue({ account: this.formServe.account });
  }

  onNext() {
    const { account } = this.form.value;
    this.formServe.handleStatusChange({ account });
  }
}
