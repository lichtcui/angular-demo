import { createAction, props } from '@ngrx/store';
import { Form } from '@interfaces/form';

export const setFormData = createAction(
  '[Form] Set form',
  props<{ form: Form }>()
);
export const setAccount = createAction(
  '[Form] Set account',
  props<{ account: number }>()
);
export const setAccountType = createAction(
  '[Form] Set account type',
  props<{ accountType: number }>()
);
export const setCurrency = createAction(
  '[Form] Set currency',
  props<{ currency: number }>()
);
