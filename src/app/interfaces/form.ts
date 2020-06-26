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

export interface Status {
  account: number;
  accountType: number;
  currency: number;
}

export interface OptionalStatus {
  account?: number;
  accountType?: number;
  currency?: number;
}
