import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FormState } from '../reducers/form.reducers';

const selectFormState = (state: FormState) => state;

export const getFormReducer = createFeatureSelector<FormState>('form');

export const getFormData = createSelector(
  selectFormState,
  (state: FormState) => state.form
);
export const getFormStatus = createSelector(
  selectFormState,
  ({ form, ...rest }: FormState) => rest
);
