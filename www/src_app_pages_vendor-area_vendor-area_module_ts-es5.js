(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_vendor-area_vendor-area_module_ts"], {
    /***/
    55220:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/vendor-area/vendor-area-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VendorAreaPageRoutingModule": function VendorAreaPageRoutingModule() {
          return (
            /* binding */
            _VendorAreaPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _vendor_area_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vendor-area.page */
      78255);

      var routes = [{
        path: '',
        component: _vendor_area_page__WEBPACK_IMPORTED_MODULE_0__.VendorAreaPage
      }];

      var _VendorAreaPageRoutingModule = function VendorAreaPageRoutingModule() {
        _classCallCheck(this, VendorAreaPageRoutingModule);
      };

      _VendorAreaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VendorAreaPageRoutingModule);
      /***/
    },

    /***/
    90363:
    /*!*********************************************************!*\
      !*** ./src/app/pages/vendor-area/vendor-area.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VendorAreaPageModule": function VendorAreaPageModule() {
          return (
            /* binding */
            _VendorAreaPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _vendor_area_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vendor-area-routing.module */
      55220);
      /* harmony import */


      var _vendor_area_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vendor-area.page */
      78255);

      var _VendorAreaPageModule = function VendorAreaPageModule() {
        _classCallCheck(this, VendorAreaPageModule);
      };

      _VendorAreaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _vendor_area_routing_module__WEBPACK_IMPORTED_MODULE_0__.VendorAreaPageRoutingModule],
        declarations: [_vendor_area_page__WEBPACK_IMPORTED_MODULE_1__.VendorAreaPage]
      })], _VendorAreaPageModule);
      /***/
    },

    /***/
    78255:
    /*!*******************************************************!*\
      !*** ./src/app/pages/vendor-area/vendor-area.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VendorAreaPage": function VendorAreaPage() {
          return (
            /* binding */
            _VendorAreaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_vendor_area_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vendor-area.page.html */
      41510);
      /* harmony import */


      var _vendor_area_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vendor-area.page.scss */
      25678);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/in-app-browser/ngx */
      69526);

      var _VendorAreaPage = /*#__PURE__*/function () {
        function VendorAreaPage(iab) {
          _classCallCheck(this, VendorAreaPage);

          this.iab = iab;
        }

        _createClass(VendorAreaPage, [{
          key: "openSelf1",
          value: function openSelf1() {
            this.iab.create('https://vestappbr.com.br/minha-conta/', '_Self', 'location: no');
          }
        }, {
          key: "openSelf2",
          value: function openSelf2() {
            this.iab.create('https://vestappbr.com.br/vendor-register/', '_Self', 'location: no');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VendorAreaPage;
      }();

      _VendorAreaPage.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser
        }];
      };

      _VendorAreaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-vendor-area',
        template: _raw_loader_vendor_area_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vendor_area_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VendorAreaPage);
      /***/
    },

    /***/
    25678:
    /*!*********************************************************!*\
      !*** ./src/app/pages/vendor-area/vendor-area.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".conteiner {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci1hcmVhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InZlbmRvci1hcmVhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxufSJdfQ== */";
      /***/
    },

    /***/
    41510:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vendor-area/vendor-area.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Área do Fornecedor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"conteiner\">\n    <ion-img src=\"/assets/vendor.png\"></ion-img>\n    <ion-button (click)=\"openSelf()\" color=\"dark\">Já sou um parceiro VestApp</ion-button>\n    <ion-button (click)=\"openSelf1()\" color=\"dark\">Quero me cadastrar</ion-button>\n\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vendor-area_vendor-area_module_ts-es5.js.map