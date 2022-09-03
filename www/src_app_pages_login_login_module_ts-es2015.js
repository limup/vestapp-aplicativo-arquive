(self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);







let LoginPage = class LoginPage {
    constructor(authService, loadingController, route, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
        this.authService.authState$.subscribe(state => {
            this.authState = state;
            if (this.authState) {
                if (this.returnUrl !== null) {
                    this.router.navigateByUrl(this.returnUrl).then();
                }
                else {
                    this.router.navigateByUrl('/').then();
                }
            }
        });
    }
    login(loginForm) {
        if (loginForm.invalid) {
            return;
        }
        else {
            const { email, password } = loginForm.value;
            this.authService.login(email, password).then();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n  --background: #000000;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: #5e5e5e;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n}\n\n.btn.btn-signin {\n  background-color: #5e5e5e;\n  color: #ffffff;\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #000000;\n}\n\n.forgot-password {\n  color: #5e5e5e;\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7O0VBQUE7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFHQSxrQkFBQTtFQUdBLDBDQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUdBLGtCQUFBO0FBQUo7O0FBR0U7O0VBQUE7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFHQSxzQkFBQTtBQUFKOztBQUdFOztFQUVFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFOzs7O0VBSUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxpRUFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLFlBQUE7RUFJQSxzQkFBQTtBQUFKOztBQUdFOzs7RUFHRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFOzs7RUFHRSxjQUFBO0FBQUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIH1cbiAgXG4gIFxuICAuY2FyZC1jb250YWluZXIuY2FyZCB7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIC8qXG4gICAqIENhcmQgY29tcG9uZW50XG4gICAqL1xuICAuY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGNztcbiAgICAvKiBqdXN0IGluIGNhc2UgdGhlcmUgbm8gY29udGVudCovXG4gICAgcGFkZGluZzogMjBweCAyNXB4IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIC8qIHNoYWRvd3MgYW5kIHJvdW5kZWQgYm9yZGVycyAqL1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5wcm9maWxlLWltZy1jYXJkIHtcbiAgICB3aWR0aDogOTZweDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qXG4gICAqIEZvcm0gc3R5bGVzXG4gICAqL1xuICAucHJvZmlsZS1uYW1lLWNhcmQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBtaW4taGVpZ2h0OiAxZW07XG4gIH1cbiAgXG4gIC5yZWF1dGgtZW1haWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNDA0MDQwO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAuZm9ybS1zaWduaW4gI2lucHV0RW1haWwsXG4gIC5mb3JtLXNpZ25pbiAjaW5wdXRQYXNzd29yZCB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9ZW1haWxdLFxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1wYXNzd29yZF0sXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPXRleHRdLFxuICAuZm9ybS1zaWduaW4gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzVlNWU1ZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2IoMTA0LCAxNDUsIDE2Mik7XG4gIH1cbiAgXG4gIC5idG4uYnRuLXNpZ25pbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gIH1cbiAgXG4gIC5idG4uYnRuLXNpZ25pbjpob3ZlcixcbiAgLmJ0bi5idG4tc2lnbmluOmFjdGl2ZSxcbiAgLmJ0bi5idG4tc2lnbmluOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuICAuZm9yZ290LXBhc3N3b3JkIHtcbiAgICBjb2xvcjogIzVlNWU1ZTtcbiAgfVxuICBcbiAgLmZvcmdvdC1wYXNzd29yZDpob3ZlcixcbiAgLmZvcmdvdC1wYXNzd29yZDphY3RpdmUsXG4gIC5mb3Jnb3QtcGFzc3dvcmQ6Zm9jdXN7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH0iXX0= */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Entrar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"card card-container\">\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"/assets/icon/icone-vestapp.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <span id=\"reauth-email\" class=\"reauth-email\"></span>\n        <ion-item>\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input type=\"text\" required name=\"email\" ngModel autofocus></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label position=\"floating\">Senha</ion-label>\n          <ion-input type=\"password\" required name=\"password\" ngModel></ion-input>\n        </ion-item>\n        <br>\n        <div id=\"remember\" class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Lembrar Senha\n          </label>\n        </div>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block btn-signin\"\n                type=\"submit\"\n                [disabled]=\"loginForm.invalid || loginForm.pending\">Entrar</button>\n\n        <button class=\"btn btn-lg btn-primary btn-block btn-signin\"\n                routerLink='/registration'>Cadastrar</button>\n      </form>\n      <br>\n      <a href=\"/forgot-password\" class=\"forgot-password\">\n        Esqueceu sua senha?\n      </a>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map