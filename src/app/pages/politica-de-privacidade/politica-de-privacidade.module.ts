import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticaDePrivacidadePageRoutingModule } from './politica-de-privacidade-routing.module';

import { PoliticaDePrivacidadePage } from './politica-de-privacidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticaDePrivacidadePageRoutingModule
  ],
  declarations: [PoliticaDePrivacidadePage]
})
export class PoliticaDePrivacidadePageModule {}
