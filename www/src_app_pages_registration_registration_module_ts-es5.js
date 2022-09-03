(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_pages_registration_registration_module_ts"], {
    /***/
    27863:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/registration/registration-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageRoutingModule": function RegistrationPageRoutingModule() {
          return (
            /* binding */
            _RegistrationPageRoutingModule
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


      var _registration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration.page */
      48010);

      var routes = [{
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_0__.RegistrationPage
      }];

      var _RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
        _classCallCheck(this, RegistrationPageRoutingModule);
      };

      _RegistrationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegistrationPageRoutingModule);
      /***/
    },

    /***/
    50015:
    /*!***********************************************************!*\
      !*** ./src/app/pages/registration/registration.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPageModule": function RegistrationPageModule() {
          return (
            /* binding */
            _RegistrationPageModule
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


      var _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./registration-routing.module */
      27863);
      /* harmony import */


      var _registration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page */
      48010);

      var _RegistrationPageModule = function RegistrationPageModule() {
        _classCallCheck(this, RegistrationPageModule);
      };

      _RegistrationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _registration_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistrationPageRoutingModule],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_1__.RegistrationPage]
      })], _RegistrationPageModule);
      /***/
    },

    /***/
    48010:
    /*!*********************************************************!*\
      !*** ./src/app/pages/registration/registration.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegistrationPage": function RegistrationPage() {
          return (
            /* binding */
            _RegistrationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./registration.page.html */
      71279);
      /* harmony import */


      var _registration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./registration.page.scss */
      45563);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/auth.service */
      37556);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _RegistrationPage = /*#__PURE__*/function () {
        function RegistrationPage(authService, loadingController, route, router) {
          _classCallCheck(this, RegistrationPage);

          this.authService = authService;
          this.loadingController = loadingController;
          this.route = route;
          this.router = router;
        }

        _createClass(RegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.returnUrl = this.route.snapshot.queryParams.returnUrl || null;
            this.authService.authState$.subscribe(function (state) {
              _this.authState = state;

              if (_this.authState) {
                if (_this.returnUrl !== null) {
                  _this.router.navigateByUrl(_this.returnUrl).then();
                } else {
                  _this.router.navigateByUrl('/').then();
                }
              }
            });
          }
        }, {
          key: "registration",
          value: function registration(registrationForm) {
            if (registrationForm.invalid) {
              return;
            } else {
              var _registrationForm$val = registrationForm.value,
                  email = _registrationForm$val.email,
                  password = _registrationForm$val.password;
              this.authService.login(email, password).then();
            }
          }
        }]);

        return RegistrationPage;
      }();

      _RegistrationPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _RegistrationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegistrationPage);
      /***/
    },

    /***/
    45563:
    /*!***********************************************************!*\
      !*** ./src/app/pages/registration/registration.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  height: 100%;\n  --background: #000000;\n}\n\n.card-container.card {\n  max-width: 350px;\n  padding: 40px 40px;\n}\n\n.btn {\n  font-weight: 700;\n  height: 36px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  width: 100%;\n  cursor: default;\n}\n\n/*\n * Card component\n */\n\n.card {\n  background-color: #F7F7F7;\n  /* just in case there no content*/\n  padding: 20px 25px 30px;\n  margin: 0 auto 25px;\n  margin-top: 50px;\n  /* shadows and rounded borders */\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n\n.profile-img-card {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n/*\n * Form styles\n */\n\n.profile-name-card {\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 10px 0 0;\n  min-height: 1em;\n}\n\n.reauth-email {\n  display: block;\n  color: #404040;\n  line-height: 2;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n\n.form-signup #inputUserName,\n.form-signup #inputEmail,\n.form-signup #inputPassword {\n  direction: ltr;\n  height: 44px;\n  font-size: 16px;\n}\n\n.form-signup input[type=email],\n.form-signup input[type=password],\n.form-signup input[type=text],\n.form-signup button {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.form-signup .form-control:focus {\n  border-color: #5e5e5e;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #6891a2;\n}\n\n.btn.btn-signup {\n  background-color: #5e5e5e;\n  color: #ffffff;\n  padding: 0px;\n  font-weight: 700;\n  font-size: 14px;\n  height: 36px;\n  border-radius: 3px;\n  border: none;\n  transition: all 0.218s;\n}\n\n.btn.btn-signup:hover,\n.btn.btn-signup:active,\n.btn.btn-signup:focus {\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTs7RUFBQTs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUdBLGtCQUFBO0VBR0EsMENBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBR0Esa0JBQUE7QUFBSjs7QUFHRTs7RUFBQTs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBR0U7OztFQUdFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFOzs7O0VBSUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUdBLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxpRUFBQTtBQUFKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLFlBQUE7RUFJQSxzQkFBQTtBQUFKOztBQUdFOzs7RUFHRSx5QkFBQTtBQUFKIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgfVxuICBcbiAgXG4gIC5jYXJkLWNvbnRhaW5lci5jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDQwcHggNDBweDtcbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICBcbiAgLypcbiAgICogQ2FyZCBjb21wb25lbnRcbiAgICovXG4gIC5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xuICAgIC8qIGp1c3QgaW4gY2FzZSB0aGVyZSBubyBjb250ZW50Ki9cbiAgICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcbiAgICBtYXJnaW46IDAgYXV0byAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgLyogc2hhZG93cyBhbmQgcm91bmRlZCBib3JkZXJzICovXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLnByb2ZpbGUtaW1nLWNhcmQge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcbiAgLypcbiAgICogRm9ybSBzdHlsZXNcbiAgICovXG4gIC5wcm9maWxlLW5hbWUtY2FyZCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IDFlbTtcbiAgfVxuICBcbiAgLnJlYXV0aC1lbWFpbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0MDQwNDA7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ251cCAjaW5wdXRVc2VyTmFtZSxcbiAgLmZvcm0tc2lnbnVwICNpbnB1dEVtYWlsLFxuICAuZm9ybS1zaWdudXAgI2lucHV0UGFzc3dvcmQge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ251cCBpbnB1dFt0eXBlPWVtYWlsXSxcbiAgLmZvcm0tc2lnbnVwIGlucHV0W3R5cGU9cGFzc3dvcmRdLFxuICAuZm9ybS1zaWdudXAgaW5wdXRbdHlwZT10ZXh0XSxcbiAgLmZvcm0tc2lnbnVwIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5mb3JtLXNpZ251cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICM1ZTVlNWU7XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiKDEwNCwgMTQ1LCAxNjIpO1xuICB9XG4gIFxuICAuYnRuLmJ0bi1zaWdudXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjIxOHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjE4cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMThzO1xuICB9XG4gIFxuICAuYnRuLmJ0bi1zaWdudXA6aG92ZXIsXG4gIC5idG4uYnRuLXNpZ251cDphY3RpdmUsXG4gIC5idG4uYnRuLXNpZ251cDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgfVxuICBcbiAgXG4gIFxuICBcblxuICAiXX0= */";
      /***/
    },

    /***/
    71279:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cadastrar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"conteiner\">\n    <div class=\"card card-conteiner\">\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"/assets/icon/icone-vestapp.png\"/>\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      <form class=\"signup\" #signupForm='ngForm' (ngSubmit)=\"signupForm\">\n        <span id='username' class='username'></span>\n        <ion-item>\n          <ion-label position=\"floating\">Nome de Usuário</ion-label>\n          <ion-input type=\"text\" required name=\"lastname\" ngModel autofocus></ion-input>\n        </ion-item>\n        <br>\n        <span id=\"reauth-email\" class=\"reauth-email\"></span>\n        <ion-item>\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input type=\"text\" required name=\"email\" ngModel autofocus></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label position=\"floating\">Senha</ion-label>\n          <ion-input type=\"password\" required name=\"password\" ngModel></ion-input>\n        </ion-item>\n        <br>\n        <div id=\"remember\" class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Lembrar Senha\n          </label>\n        </div>\n        <br>\n        <button class=\"btn btn-lg btn-primary btn-block btn-signup\"\n                type=\"submit\"\n                [disabled]=\"signupForm.invalid || signupForm.pending\">Cadastrar</button>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_registration_registration_module_ts-es5.js.map