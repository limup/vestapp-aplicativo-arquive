import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private authService: AuthService,
    private iab: InAppBrowser) {}

    openSelf() {
      this.iab.create('https://vestappbr.com.br/lista-de-lojas/', '_Self', 'location: no',)
    }

    logout(): void {
       this.authService.logout();
    }
}