import { IonicModule } from '@ionic/angular';
import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-vendor-area',
  templateUrl: './vendor-area.page.html',
  styleUrls: ['./vendor-area.page.scss'],
})
export class VendorAreaPage implements OnInit {

  constructor(
    private iab: InAppBrowser) {
    }

    openSelf() {
      this.iab.create('https://vestappbr.com.br/store-manager/', '_Self','location: no', )
    }
    openSelf1(){
      this.iab.create('https://vestappbr.com.br/vendor-register/', '_Self', 'location: no',)
    }
  ngOnInit() {
    
  }

}
