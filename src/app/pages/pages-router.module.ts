import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { FillComponent } from './fill/fill.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const pagesRoutes: Routes = [
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'fill',
    component: FillComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: '**',
    redirectTo: 'select',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
