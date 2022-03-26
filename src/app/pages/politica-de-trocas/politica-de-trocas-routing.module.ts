import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaDeTrocasPage } from './politica-de-trocas.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDeTrocasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaDeTrocasPageRoutingModule {}
