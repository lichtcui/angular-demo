import { Action, createReducer, on } from '@ngrx/store';
import { setForm, setStatus } from '../actions/form.actions';
import { Form, Status } from '@interfaces/form';

export interface FormState {
  form: Form;
  status: Status;
}

export const initialState: FormState = {
  form: {
    accounts: [],
    accountTypes: [],
    currencies: [],
  },
  status: {
    account: 0,
    accountType: 0,
    currency: 0,
  },
};

const _formReducer = createReducer(
  initialState,
  on(setForm, (state, { form }) => ({ ...state, form })),
  on(setStatus, (state, { status }) => ({ ...state, status }))
);

export const formReducer = (state: FormState, action: Action) =>
  _formReducer(state, action);
