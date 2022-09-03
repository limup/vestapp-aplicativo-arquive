(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkVestApp_Marketplace"] = self["webpackChunkVestApp_Marketplace"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    1148:
    /*!*****************************************************************!*\
      !*** ./src/app/Components/filter-menu/filter-menu.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FilterMenuComponent": function FilterMenuComponent() {
          return (
            /* binding */
            _FilterMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./filter-menu.component.html */
      32605);
      /* harmony import */


      var _filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./filter-menu.component.scss */
      15293);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      61628);

      var _FilterMenuComponent = /*#__PURE__*/function () {
        function FilterMenuComponent(menuController, router, storage) {
          _classCallCheck(this, FilterMenuComponent);

          this.menuController = menuController;
          this.router = router;
          this.storage = storage;
          this.checkbox = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.categories = [];
        }

        _createClass(FilterMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.collapsed = true;
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.collapsed = !this.collapsed;
          }
        }, {
          key: "checkboxSelected",
          value: function checkboxSelected(ev) {
            this.menuController.close('filter').then();
            this.checkbox.emit({
              name: ev.target.name,
              selected: ev.target.checked
            });
          }
        }, {
          key: "closeMenu",
          value: function closeMenu() {
            this.menuController.close('filter').then();
          }
        }]);

        return FilterMenuComponent;
      }();

      _FilterMenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage
        }];
      };

      _FilterMenuComponent.propDecorators = {
        checkbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
          args: ['checkbox']
        }],
        categories: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['categories']
        }],
        ionCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
          args: ['checkbox', {
            "static": false
          }]
        }]
      };
      _FilterMenuComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filter-menu',
        template: _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _FilterMenuComponent);
      /***/
    },

    /***/
    13516:
    /*!***************************************************************!*\
      !*** ./src/app/Components/sort-modal/sort-modal.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SortModalComponent": function SortModalComponent() {
          return (
            /* binding */
            _SortModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sort-modal.component.html */
      47984);
      /* harmony import */


      var _sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sort-modal.component.scss */
      8821);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _SortModalComponent = /*#__PURE__*/function () {
        function SortModalComponent(modalController) {
          _classCallCheck(this, SortModalComponent);

          this.modalController = modalController;
        }

        _createClass(SortModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.radioValue = localStorage.getItem('radio') || 'title-desc';
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss(null, 'cancel').then();
          }
        }, {
          key: "radioChanged",
          value: function radioChanged(ev) {
            this.radioValue = ev.target.value;
            localStorage.setItem('radio', this.radioValue);
            this.modalController.dismiss(this.radioValue, 'sort').then();
          }
        }]);

        return SortModalComponent;
      }();

      _SortModalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }];
      };

      _SortModalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sort-modal',
        template: _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SortModalComponent);
      /***/
    },

    /***/
    44131:
    /*!******************************************************!*\
      !*** ./src/app/services/product-resolver.service.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductResolverService": function ProductResolverService() {
          return (
            /* binding */
            _ProductResolverService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product.service */
      66082);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      68307);

      var _ProductResolverService = /*#__PURE__*/function () {
        function ProductResolverService(productService, loadingController) {
          _classCallCheck(this, ProductResolverService);

          this.productService = productService;
          this.loadingController = loadingController;
        }

        _createClass(ProductResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this = this;

            var id = route.params.id;
            return this.productService.getSingleProduct(id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.loadingController.getTop();

                      case 2:
                        if (!_context.sent) {
                          _context.next = 4;
                          break;
                        }

                        this.loadingController.dismiss().then();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }));
          }
        }]);

        return ProductResolverService;
      }();

      _ProductResolverService.ctorParameters = function () {
        return [{
          type: _product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController
        }];
      };

      _ProductResolverService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _ProductResolverService);
      /***/
    },

    /***/
    42580:
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageRoutingModule": function Tab1PageRoutingModule() {
          return (
            /* binding */
            _Tab1PageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/product-resolver.service */
      44131);

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
      }, {
        path: 'prod-detail/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tab1_prod-detail_prod-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./prod-detail/prod-detail.module */
          56573)).then(function (m) {
            return m.ProdDetailPageModule;
          });
        },
        resolve: {
          product: _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_1__.ProductResolverService
        }
      }];

      var _Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      _Tab1PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _Tab1PageRoutingModule);
      /***/
    },

    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab1-routing.module */
      42580);
      /* harmony import */


      var _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Components/sort-modal/sort-modal.component */
      13516);
      /* harmony import */


      var _Components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Components/filter-menu/filter-menu.component */
      1148);

      var _Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      _Tab1PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page, _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__.SortModalComponent, _Components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilterMenuComponent]
      })], _Tab1PageModule);
      /***/
    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab1.page.html */
      5683);
      /* harmony import */


      var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab1.page.scss */
      99474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/product.service */
      66082);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Components/sort-modal/sort-modal.component */
      13516);
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/cart.service */
      90910);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      88002);

      var _Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(productService, loadingController, menuController, toastController, modalController, cartService) {
          _classCallCheck(this, Tab1Page);

          this.productService = productService;
          this.loadingController = loadingController;
          this.menuController = menuController;
          this.toastController = toastController;
          this.modalController = modalController;
          this.cartService = cartService;
          this.sliderImages = ['/assets/slide1', '/assets/slide2', '/assets/slide3', '/assets/slide4', '/assets/slide5'];
          this.sliderOptions = {
            autoplay: {
              delay: 2000
            },
            loop: true
          };
          this.listArrayOfProducts = [];
          this.displayedList = [];
          this.currentPage = 1;
          this.filterCount = 0;
          this.filteredCategoryList = [];
          this.categories = [];
          this.loadMoreData(null).then();
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var loader;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        message: 'Buscando Produtos...',
                        spinner: "circular",
                        animated: true
                      });

                    case 2:
                      loader = _context4.sent;
                      _context4.next = 5;
                      return loader.present().then();

                    case 5:
                      this.productService.getAllProducts().subscribe(function (products) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return loader.dismiss().then();

                                case 2:
                                  this.listArrayOfProducts = products;
                                  this.displayedList = _toConsumableArray(this.listArrayOfProducts);

                                case 4:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      }, function (err) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  _context3.next = 2;
                                  return loader.dismiss().then();

                                case 2:
                                  console.log(err);

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));
                      });
                      _context4.next = 8;
                      return this.productService.getAllCategories().toPromise();

                    case 8:
                      this.categories = _context4.sent;
                      this.cartService.cartData.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
                        return data.count;
                      })).subscribe(function (count) {
                        return _this2.count = count;
                      });

                    case 10:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "loadMoreData",
          value: function loadMoreData(ev) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this3 = this;

              var toast;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.toastController.create({
                        message: 'Não há mais produtos',
                        animated: true,
                        duration: 2000,
                        buttons: [{
                          text: 'Fechar',
                          role: 'cancel',
                          icon: 'close'
                        }]
                      });

                    case 2:
                      toast = _context6.sent;

                      if (!(ev == null)) {
                        _context6.next = 8;
                        break;
                      }

                      this.currentPage = 1;
                      return _context6.abrupt("return");

                    case 8:
                      this.currentPage++;
                      this.productService.getAllProducts(this.currentPage).subscribe(function (prods) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  this.listArrayOfProducts = this.listArrayOfProducts.concat(prods);
                                  this.displayedList = _toConsumableArray(this.listArrayOfProducts);

                                  if (ev !== null) {
                                    ev.target.complete();
                                  }

                                  if (!(prods.length < 10)) {
                                    _context5.next = 7;
                                    break;
                                  }

                                  _context5.next = 6;
                                  return toast.present().then();

                                case 6:
                                  ev.target.disabled = true;

                                case 7:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      }, function (err) {
                        console.log(err);
                      });

                    case 10:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "loadingSpinner",
          value: function loadingSpinner() {
            this.loadingController.create({
              message: "Carregando Detalhes..",
              animated: true,
              spinner: "circular",
              backdropDismiss: false,
              showBackdrop: true
            }).then(function (el) {
              return el.present();
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            var _this4 = this;

            this.modalController.create({
              component: _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_3__.SortModalComponent,
              animated: true,
              cssClass: 'sortModal'
            }).then(function (el) {
              el.present().then();
              return el.onDidDismiss().then(function (resultData) {
                _this4.sort({
                  role: resultData.role,
                  data: resultData.data
                });
              });
            });
          }
        }, {
          key: "sort",
          value: function sort(resultData) {
            var _Object$assign = Object.assign({}, resultData),
                role = _Object$assign.role,
                data = _Object$assign.data;

            if (role === 'cancel') {
              return;
            } else if (role === 'sort') {
              // Check the type of sorting asked by the customer
              if (data === 'title-asc') {
                this.displayedList.sort(function (a, b) {
                  var x = a.name.toLowerCase();
                  var y = b.name.toLowerCase();

                  if (x < y) {
                    return -1;
                  }

                  if (x > y) {
                    return 1;
                  }

                  return 0;
                });
              } else if (data === 'title-desc') {
                this.displayedList.sort(function (a, b) {
                  var x = a.name.toLowerCase();
                  var y = b.name.toLowerCase();

                  if (x > y) {
                    return -1;
                  }

                  if (x < y) {
                    return 1;
                  }

                  return 0;
                });
              } else if (data === 'price-asc') {
                this.displayedList.sort(function (a, b) {
                  // @ts-ignore
                  return a.price - b.price; // Low To High
                });
              } else if (data === 'price-desc') {
                this.displayedList.sort(function (a, b) {
                  // @ts-ignore
                  return b.price - a.price; // High To Low
                });
              }
            }
          }
        }, {
          key: "openFilter",
          value: function openFilter() {
            this.menuController.enable(true, 'filter').then();
            this.menuController.open('filter').then();
          }
        }, {
          key: "categoryFilter",
          value: function categoryFilter(ev) {
            var _this5 = this;

            // If the user clicked the filter for the first time and nothing is selected
            if (ev.selected && this.filterCount === 0) {
              this.filteredCategoryList.push(ev.name);
              this.filterCount++;
              this.displayedList = this.displayedList.filter(function (p) {
                return p.categories.some(function (cat) {
                  return cat.name === ev.name;
                });
              });
            } // If the category selected is not present in the list of items
            else if (ev.selected && this.filterCount >= 1) {
              var newArray = _toConsumableArray(this.listArrayOfProducts);

              this.filterCount++;

              if (!this.filteredCategoryList.includes(ev.name)) {
                this.filteredCategoryList.push(ev.name);
                var product = newArray.filter(function (p) {
                  return p.categories.some(function (cat) {
                    return cat.name === ev.name;
                  });
                });
                var i;
                product.forEach(function (p) {
                  i = _this5.displayedList.findIndex(function (prod) {
                    return prod.id === p.id;
                  }); // If product is present in the array

                  if (i !== -1) {
                    return;
                  } else {
                    _this5.displayedList = _this5.displayedList.concat(p);
                  }
                });
              } else {
                return;
              }
            } // END OF ELSE IF
            else if (!ev.selected && this.filterCount >= 1) {
              var _newArray = _toConsumableArray(this.listArrayOfProducts);

              this.filterCount--; // Remove the category from the filter list array

              this.filteredCategoryList = this.filteredCategoryList.filter(function (el) {
                return el !== ev.name;
              });

              if (this.filteredCategoryList.length > 0) {
                this.displayedList = [];
                this.filteredCategoryList.forEach(function (el) {
                  _this5.displayedList = _this5.displayedList.concat(_newArray.filter(function (p) {
                    return p.categories.some(function (cat) {
                      return cat.name === el;
                    });
                  }));
                });
              } // Check if the filter count has reached 0, that means no filter is present now


              if (this.filterCount === 0) {
                this.displayedList = _toConsumableArray(this.listArrayOfProducts);
              }
            }
          }
        }, {
          key: "segmentChange",
          value: function segmentChange(ev) {
            var value = ev.target.value;

            if (value === 'featured') {
              this.loadMoreData(null).then();
              this.displayedList = this.listArrayOfProducts.filter(function (p) {
                return p.featured === true;
              });
            } else {
              this.displayedList = _toConsumableArray(this.listArrayOfProducts);
            }
          }
        }]);

        return Tab1Page;
      }();

      _Tab1Page.ctorParameters = function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService
        }];
      };

      _Tab1Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab1Page);
      /***/
    },

    /***/
    15293:
    /*!*******************************************************************!*\
      !*** ./src/app/Components/filter-menu/filter-menu.component.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    8821:
    /*!*****************************************************************!*\
      !*** ./src/app/Components/sort-modal/sort-modal.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    99474:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cart-count {\n  margin-right: 20px;\n  position: absolute;\n  right: 0;\n  top: 5px;\n}\n\nion-icon[name=cart-outline] {\n  color: rgba(231, 143, 78, 0.74);\n}\n\nion-buttons[slot=end] > ion-button.cart {\n  margin-right: 20px;\n}\n\nion-buttons[slot=primary] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-buttons[slot=primary] ion-button {\n  flex: 1;\n}\n\n.item-entry {\n  padding: 10px 0;\n}\n\n.item-name {\n  font-size: 16px;\n  font-weight: 600;\n  font-style: normal;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  color: var(--ion-color-dark-tint);\n}\n\n.price {\n  color: var(--ion-color-tertiary-tint);\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.product {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-left: 1.4rem;\n}\n\n.icon {\n  width: 40px;\n}\n\n.fixline {\n  height: 325px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUU7RUFDRSwrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDSTtFQUNFLE9BQUE7QUFDTjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0lBQUE7RUFDQSxpQ0FBQTtBQUFKOztBQUdFO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFBSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvdW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNXB4O1xuICB9XG4gIFxuICBpb24taWNvbltuYW1lPVwiY2FydC1vdXRsaW5lXCJdIHtcbiAgICBjb2xvcjogcmdiYSgyMzEsIDE0MywgNzgsIDAuNzQpO1xuICB9XG4gIFxuICBpb24tYnV0dG9uc1tzbG90PVwiZW5kXCJdID4gaW9uLWJ1dHRvbi5jYXJ0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1idXR0b25zW3Nsb3Q9XCJwcmltYXJ5XCJdIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG4gIFxuICAuaXRlbS1lbnRyeSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG4gIFxuICAuaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIH1cbiAgXG4gIC5wcmljZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBcbiAgLnByb2R1Y3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xuICB9XG5cbiAgLmljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG5cbiAgLmZpeGxpbmUge1xuICAgIGhlaWdodDogMzI1cHg7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    32605:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filter-menu/filter-menu.component.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu contentId=\"filter\" menuId=\"filter\" side=\"end\">\n  <ion-header>\n    <ion-toolbar color=\"dark\">\n      <ion-title>Categorias</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeMenu()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        <ion-label class=\"d-flex ion-justify-content-between\">\n          <h2>Selecione a categoria</h2>\n        </ion-label>\n        <ion-buttons>\n          <ion-button data-toggle=\"collapse\" data-target=\"#filterMenu\" (click)=\"onClick()\">\n            <ion-icon name=\"add-outline\" slot=\"end\" *ngIf=\"collapsed\"></ion-icon>\n            <ion-icon name=\"remove-outline\" slot=\"end\" *ngIf=\"!collapsed\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <hr>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let c of categories\" class=\"collapse\" id=\"filterMenu\">\n        <ion-checkbox color=\"secondary\"\n                      name=\"{{c.name}}\"\n                      slot=\"start\"\n                      (ionChange)=\"checkboxSelected($event)\"\n                      #checkbox>\n        </ion-checkbox>\n        <ion-text>{{ c.name }}</ion-text>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>";
      /***/
    },

    /***/
    47984:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sort-modal/sort-modal.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Filtrar</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)=\"radioChanged($event)\" [value]=\"radioValue\">\n      <ion-item>\n        <ion-label>Nome crescente</ion-label>\n        <ion-radio value=\"title-asc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Nome decrescente</ion-label>\n        <ion-radio value=\"title-desc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Preço baixo para alto</ion-label>\n        <ion-radio value=\"price-asc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Preço alto para baixo</ion-label>\n        <ion-radio value=\"price-desc\"></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    5683:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-filter-menu (checkbox)=\"categoryFilter($event)\" [categories]=\"categories\"></app-filter-menu>\n<ion-router-outlet id=\"filter\"></ion-router-outlet>\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <!--<ion-button>\n                <ion-icon name=\"menu\" slot=\"icon-only\"></ion-icon>\n            </ion-button>-->\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-img class=\"icon\" slot=\"start\" src=\"assets/icon/icone-vestapp.png\"></ion-img>\n        <ion-title>\n            VestApp\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button routerLink=\"/search\">\n                <ion-icon name=\"search-outline\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button class=\"cart\" routerLink=\"/tabs/tab3\">\n                <ion-icon name=\"cart-outline\" size=\"large\" color=\"light\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-badge class=\"cart-count\" color=\"light\" slot=\"end\">{{ count || 0 }}</ion-badge>\n    </ion-toolbar>\n    \n\n    <ion-toolbar color=\"dark\">\n        <ion-segment (ionChange)=\"segmentChange($event)\" value=\"all\">\n            <ion-segment-button value=\"all\">\n                <ion-label>Todos</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"featured\"><ion-label>Destaques</ion-label></ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"position: relative;\">\n    <ion-toolbar style=\"position: fixed; top: 114px;\">\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" expand=\"block\" fill=\"clear\" (click)=\"openModal()\">\n                <ion-icon name=\"funnel-outline\" slot=\"end\"></ion-icon>\n                Filtrar\n            </ion-button>\n            <ion-button color=\"dark\" expand=\"block\" fill=\"clear\" (click)=\"openFilter()\">\n                <ion-icon name=\"filter-outline\" slot=\"end\"></ion-icon>\n                Categorias\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-slides [options]=\"sliderOptions\" class=\"ion-padding\" pager style=\"margin-top: 4.2rem;\">\n        <ion-slide *ngFor=\"let slide of sliderImages\">\n            <img [src]=\"slide+'.png'\" alt=\"images\">\n        </ion-slide>\n    </ion-slides>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col *ngFor=\"let prod of displayedList\"\n                     class=\"item-entry\"\n                     (click)=\"loadingSpinner()\"\n                     detail\n                     routerLink=\"/tabs/tab1/prod-detail/{{ prod.id }}\" col-6 no-padding>\n                <ion-card>\n                    <ion-card-header class=\"fixline\">\n                        <ion-img [src]=\"prod.images[0].src\" alt=\"{{ prod.name }}\"></ion-img>\n                        <ion-card-title class=\"item-name\">{{ prod.name }}</ion-card-title>\n                        <ion-card-subtitle class=\"price\">{{  prod.price | currency:\"R$\" }}</ion-card-subtitle>\n                        <ion-button expand=\"full\" fill=\"solid\" color=\"dark\">Ver</ion-button>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n   <ion-infinite-scroll (ionInfinite)=\"loadMoreData($event)\" threshold=\"10px\">\n       <ion-infinite-scroll-content\n         loadingSpinner=\"circle\"\n         loadingText=\"Buscando mais produtos...\"\n       >\n       </ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map