import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { formReducer } from './reducers/form.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ form: formReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
})
export class AppStoreModule {}
