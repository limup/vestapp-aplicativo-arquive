import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {Capacitor, Plugins} from "@capacitor/core";
import { Storage } from '@ionic/storage-angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private storage: Storage,
        
    ) {
        this.initializeApp();
    }

    async ngOnInit() {
        await this.storage.create()
    }

    initializeApp() {
        /*this.platform.ready().then(() => {
             this.statusBar.styleDefault();
             this.splashScreen.hide();
           });*/

        this.platform.ready().then(() => {
            if (Capacitor.isPluginAvailable('SplashScreen')) {
                Plugins.SplashScreen.hide().then();
            }
        });
    }
}