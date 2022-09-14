import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no' 
      hidden : 'yes', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only 
      fullscreen : 'yes',//Windows only    
      hideurlbar: 'yes'
  };

  constructor(
    private iab: InAppBrowser) { }

  ngOnInit() {
    
    //let target = "_system"; //openWithSystemBrowser
    let target = "_blank"; //openWithInAppBrowser
    //let target = "_self"; //openWithCordovaBrowser(

    const browser = this.iab.create('https://vestappbr.com.br/', target, this.options);

    browser.on('loadstop').subscribe(event => {
        
    });
   
  }
}
