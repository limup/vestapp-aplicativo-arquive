import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaDeTrocasPageRoutingModule } from './politica-de-trocas-routing.module';

import { PoliticaDeTrocasPage } from './politica-de-trocas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaDeTrocasPageRoutingModule
  ],
  declarations: [PoliticaDeTrocasPage]
})
export class PoliticaDeTrocasPageModule {}
