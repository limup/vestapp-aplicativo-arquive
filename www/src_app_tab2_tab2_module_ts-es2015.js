(self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 89876:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": function() { return /* binding */ AccountService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);




let AccountService = class AccountService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend_api_url;
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AccountService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 93092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": function() { return /* binding */ Tab2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 14608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": function() { return /* binding */ Tab2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 70442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 93092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 70442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": function() { return /* binding */ Tab2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 82477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 92055);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/account.service */ 89876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let Tab2Page = class Tab2Page {
    constructor(accountService, authService, loadingController, route, router) {
        this.accountService = accountService;
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
Tab2Page.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 92055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  height: 100%;\n  --background: #000000;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signin #inputEmail,\n.form-signin #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signin input[type=email],\n.form-signin input[type=password],\n.form-signin input[type=text],\n.form-signin button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signin .form-control:focus {\n  border-color: #5e5e5e;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n}\n\n.btn.btn-signin {\n  background-color: #5e5e5e;\n  color: #ffffff;\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signin:hover,\n.btn.btn-signin:active,\n.btn.btn-signin:focus {\n  background-color: #000000;\n}\n\n.forgot-password {\n  color: #5e5e5e;\n}\n\n.forgot-password:hover,\n.forgot-password:active,\n.forgot-password:focus {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7TUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTs7RUFBQTs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUdBLGtCQUFBO0VBR0EsMENBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7QUFBSjs7QUFHRTs7RUFBQTs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBR0U7O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7Ozs7RUFJRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBR0Esc0JBQUE7QUFBSjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUVBLGlFQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EsWUFBQTtFQUlBLHNCQUFBO0FBQUo7O0FBR0U7OztFQUdFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0FBQUo7O0FBR0U7OztFQUdFLGNBQUE7QUFBSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICB9XG4gIFxuICBcbiAgLmNhcmQtY29udGFpbmVyLmNhcmQge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgcGFkZGluZzogNDBweCA0MHB4O1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGhlaWdodDogMzZweDtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG4gIFxuICAvKlxuICAgKiBDYXJkIGNvbXBvbmVudFxuICAgKi9cbiAgLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG4gICAgLyoganVzdCBpbiBjYXNlIHRoZXJlIG5vIGNvbnRlbnQqL1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAzMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAvKiBzaGFkb3dzIGFuZCByb3VuZGVkIGJvcmRlcnMgKi9cbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gIFxuICAucHJvZmlsZS1pbWctY2FyZCB7XG4gICAgd2lkdGg6IDk2cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuICAvKlxuICAgKiBGb3JtIHN0eWxlc1xuICAgKi9cbiAgLnByb2ZpbGUtbmFtZS1jYXJkIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgbWluLWhlaWdodDogMWVtO1xuICB9XG4gIFxuICAucmVhdXRoLWVtYWlsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzQwNDA0MDtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLmZvcm0tc2lnbmluICNpbnB1dEVtYWlsLFxuICAuZm9ybS1zaWduaW4gI2lucHV0UGFzc3dvcmQge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPWVtYWlsXSxcbiAgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuICAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT10ZXh0XSxcbiAgLmZvcm0tc2lnbmluIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM1ZTVlNWU7XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICB9XG4gIFxuICAuYnRuLmJ0bi1zaWduaW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICB9XG4gIFxuICAuYnRuLmJ0bi1zaWduaW46aG92ZXIsXG4gIC5idG4uYnRuLXNpZ25pbjphY3RpdmUsXG4gIC5idG4uYnRuLXNpZ25pbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgfVxuICBcbiAgLmZvcmdvdC1wYXNzd29yZCB7XG4gICAgY29sb3I6ICM1ZTVlNWU7XG4gIH1cbiAgXG4gIC5mb3Jnb3QtcGFzc3dvcmQ6aG92ZXIsXG4gIC5mb3Jnb3QtcGFzc3dvcmQ6YWN0aXZlLFxuICAuZm9yZ290LXBhc3N3b3JkOmZvY3Vze1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9Il19 */");

/***/ }),

/***/ 82477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Minha Conta</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"card card-container\">\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"/assets/icon/icone-vestapp.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      <form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n        <span id=\"reauth-email\" class=\"reauth-email\"></span>\n        <ion-item>\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input type=\"text\" required name=\"email\" ngModel autofocus></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label position=\"floating\">Senha</ion-label>\n          <ion-input type=\"password\" required name=\"password\" ngModel></ion-input>\n        </ion-item>\n        <br>\n        <div id=\"remember\" class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Lembrar Senha\n          </label>\n        </div>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block btn-signin\"\n                type=\"submit\"\n                [disabled]=\"loginForm.invalid || loginForm.pending\">Entrar</button>\n\n        <button class=\"btn btn-lg btn-primary btn-block btn-signin\"\n                routerLink='/registration'>Cadastrar</button>\n      </form>\n      <br>\n      <a href=\"/forgot-password\" class=\"forgot-password\">\n        Esqueceu sua senha?\n      </a>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es2015.js.map