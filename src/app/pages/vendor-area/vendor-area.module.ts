import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorAreaPageRoutingModule } from './vendor-area-routing.module';

import { VendorAreaPage } from './vendor-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorAreaPageRoutingModule
  ],
  declarations: [VendorAreaPage]
})
export class VendorAreaPageModule {}
