interface DefaultValue {
  id: number;
  name: string;
}

export interface Account extends DefaultValue {
  desc: string;
}

export interface AccountType extends DefaultValue {}

export interface Currency extends DefaultValue {}

export interface Form {
  accounts: Account[];
  accountTypes: AccountType[];
  currencies: Currency[];
}
