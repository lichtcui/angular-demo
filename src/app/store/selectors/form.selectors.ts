import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FormState } from '../reducers/form.reducers';

const selectFormState = (state: FormState) => state;

export const getFormReducer = createFeatureSelector<FormState>('form');

export const getFormData = createSelector(
  selectFormState,
  (state: FormState) => state.form
);
export const getFormChoices = createSelector(
  selectFormState,
  (state: FormState) => ({
    account: state.account,
    accountType: state.accountType,
    currency: state.currency,
  })
);
export const getAccount = createSelector(
  selectFormState,
  (state: FormState) => state.account
);
export const getAccountType = createSelector(
  selectFormState,
  (state: FormState) => state.accountType
);
export const getCurrency = createSelector(
  selectFormState,
  (state: FormState) => state.currency
);
