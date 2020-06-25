import { NgModule } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { FillComponent } from './fill/fill.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-router.module';

@NgModule({
  declarations: [
    SelectComponent,
    FillComponent,
    ConfirmationComponent,
    HomeComponent,
  ],
  imports: [PagesRoutingModule],
  exports: [],
})
export class PagesModule {}
