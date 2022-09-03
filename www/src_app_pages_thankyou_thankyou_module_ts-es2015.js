(self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_thankyou_thankyou_module_ts"],{

/***/ 89900:
/*!***********************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPageRoutingModule": function() { return /* binding */ ThankyouPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thankyou.page */ 69796);




const routes = [
    {
        path: '',
        component: _thankyou_page__WEBPACK_IMPORTED_MODULE_0__.ThankyouPage
    }
];
let ThankyouPageRoutingModule = class ThankyouPageRoutingModule {
};
ThankyouPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThankyouPageRoutingModule);



/***/ }),

/***/ 50326:
/*!***************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPageModule": function() { return /* binding */ ThankyouPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thankyou-routing.module */ 89900);
/* harmony import */ var _thankyou_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thankyou.page */ 69796);







let ThankyouPageModule = class ThankyouPageModule {
};
ThankyouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThankyouPageRoutingModule
        ],
        declarations: [_thankyou_page__WEBPACK_IMPORTED_MODULE_1__.ThankyouPage]
    })
], ThankyouPageModule);



/***/ }),

/***/ 69796:
/*!*************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankyouPage": function() { return /* binding */ ThankyouPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./thankyou.page.html */ 99285);
/* harmony import */ var _thankyou_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thankyou.page.scss */ 24595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ThankyouPage = class ThankyouPage {
    constructor(router) {
        this.router = router;
        this.products = [];
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.message = state.message;
        this.products = state.products;
        console.log(this.products);
        this.orderId = state.orderId;
        this.cartTotal = state.total;
    }
    ngOnInit() {
    }
};
ThankyouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ThankyouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-thankyou',
        template: _raw_loader_thankyou_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thankyou_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThankyouPage);



/***/ }),

/***/ 24595:
/*!***************************************************!*\
  !*** ./src/app/pages/thankyou/thankyou.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3lvdS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 99285:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thankyou/thankyou.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Obrigado</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/\">\n        <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"jumbotron text-center\">\n          <h1 class=\"display-3\">Obrigado por comprar com a VestApp!</h1>\n          <p class=\"lead\"><strong>Por favor verifique seu email</strong> para confirmação de pedido.</p>\n          <hr>\n          <p>\n          <p>Numero do Pedido: <strong>{{orderId}}</strong></p>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"d-flex justify-content-center\">\n        <ion-button routerLink=\"/\" color=\"dark\" fill=\"solid\" expand=\"full\" size=\"large\">Voltar para o inicio</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_thankyou_thankyou_module_ts-es2015.js.map