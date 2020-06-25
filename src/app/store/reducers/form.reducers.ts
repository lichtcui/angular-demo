import { Action, createReducer, on } from '@ngrx/store';
import {
  setAccount,
  setAccountType,
  setCurrency,
  setFormData,
} from '../actions/form.actions';
import { Form } from '@interfaces/form';

export interface FormState {
  form: Form;
  account: number;
  accountType: number;
  currency: number;
}

export const initialState: FormState = {
  form: {
    accounts: [],
    accountTypes: [],
    currencies: [],
  },
  account: 0,
  accountType: 0,
  currency: 0,
};

const _formReducer = createReducer(
  initialState,
  on(setAccount, (state, { account }) => ({ ...state, account })),
  on(setAccountType, (state, { accountType }) => ({ ...state, accountType })),
  on(setCurrency, (state, { currency }) => ({ ...state, currency })),
  on(setFormData, (state, { form }) => ({ ...state, form }))
);

export const formReducer = (state: FormState, action: Action) =>
  _formReducer(state, action);
