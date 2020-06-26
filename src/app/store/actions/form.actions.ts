import { createAction, props } from '@ngrx/store';
import { Form, Status } from '@interfaces/form';

export const setForm = createAction('[Form] Set form', props<{ form: Form }>());
export const setStatus = createAction(
  '[Form] Set form status',
  props<{ status: Status }>()
);
