import { NgModule } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { FillComponent } from './fill/fill.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-router.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    SelectComponent,
    FillComponent,
    ConfirmationComponent,
    HomeComponent,
  ],
  imports: [PagesRoutingModule, ShareModule],
  exports: [],
})
export class PagesModule {}
