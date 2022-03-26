import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorAreaPage } from './vendor-area.page';

const routes: Routes = [
  {
    path: '',
    component: VendorAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorAreaPageRoutingModule {}
