webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<img width=\"300\" src=\"\">-->\n<header class=\"tf\">\n</header>\n<div style=\"text-align:center\">\n  <h1>\n     {{ title }}!\n   </h1>\n  <h2>Ready to inspire... </h2>\n  <!--added\n  <ul>\n    <li> *ngFor='let quote of quotes'>{{quote}}</li>\n  </ul>\n  <p>Quote is {{quote}}</p>-->\n  <app-form></app-form>\n  <!--<ul>\n    <li> *ngFor='let quote of quotes'>{{quote.name}}</li>\n  </ul>-->\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    //quotes: string[];
    function AppComponent() {
        ///new Quote(1,'dont give up'),
        //new Quote(2,'things get better i guess'),
        //]
        //quote="#newlink";
        this.title = 'Quotes';
        this.quotes = ["don't give up", "buy cookies"];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotess_quotess_component__ = __webpack_require__("./src/app/quotess/quotess.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quotess_quotess_component__["a" /* QuotessComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <form (ngSubmit)='submitQuote()'>\n\n      <!-- Name Form -->\n      <div class=\"form-group\">\n        <label for=\"name\">Author</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.Author\" name=\"name\" #name=\"ngModel\">\n        <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n\n\n        </div>\n      </div>\n      <br>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Quote</label>\n        <textarea class=\"form-control\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.Quote\" name=\"description\" #description=\"ngModel\"></textarea>\n        <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-danger\">\n\n\n        </div>\n\n      </div>\n      <br>\n\n      <button type=\"Submit\" class=\"btn btn-success btn-lg\">Add Quote</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotes__ = __webpack_require__("./src/app/quotes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.newQuote = new __WEBPACK_IMPORTED_MODULE_1__quotes__["a" /* Quotes */](0, "", "", new Date());
        this.addQuote = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    FormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    FormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "addQuote", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/quotes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quotes; });
var Quotes = /** @class */ (function () {
    function Quotes(title, Author, votes, time) {
        this.title = title;
        this.Author = Author;
    }
    return Quotes;
}());



/***/ }),

/***/ "./src/app/quotess/quotess.component.css":
/***/ (function(module, exports) {

module.exports = ".item {\n  color: white;\n}"

/***/ }),

/***/ "./src/app/quotess/quotess.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"four wide column center aligned votes\">\n  <div class=\"ui statistic\">\n    <div class=\"value\">\n      {{ votes }}\n    </div>\n    <div class=\"label\">\n      Points\n    </div>\n  </div>\n</div>\n<div class=\"twelve wide column\">\n  <a class=\"ui large header\" href=\"{{ link }}\">\n{{ title }}\n</a>\n  <ul class=\"ui big horizontal list voters\">\n    <li class=\"item\">\n      <a href (click)=\"voteUp()\">\n<i class=\"arrow up icon\"></i>\nupvote\n</a>\n    </li>\n    <li class=\"item\">\n      <a href (click)=\"voteDown()\">\n<i class=\"arrow down icon\"></i>\ndownvote\n</a>\n    </li>\n  </ul>\n</div>\n<button (click)='quoteDelete(true)'> Delete Quote </button>"

/***/ }),

/***/ "./src/app/quotess/quotess.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotes__ = __webpack_require__("./src/app/quotes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotessComponent = /** @class */ (function () {
    function QuotessComponent() {
        this.isComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        //  deleteQuote(quote) {
        //   for (let i = 0; i < this.quotes.length; i++) {
        //   if (this.quotes[i] === quote) {
        //   this.quotes.splice(i, 1);
        // }
        //   }
    }
    QuotessComponent.prototype.quoteDelete = function (complete) {
        this.isComplete.emit(complete);
    };
    ;
    QuotessComponent.prototype.ngOnInit = function () {
        this.votes = 0;
    };
    ;
    QuotessComponent.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    ;
    QuotessComponent.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__quotes__["a" /* Quotes */])
    ], QuotessComponent.prototype, "quote", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], QuotessComponent.prototype, "isComplete", void 0);
    QuotessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quotess',
            template: __webpack_require__("./src/app/quotess/quotess.component.html"),
            styles: [__webpack_require__("./src/app/quotess/quotess.component.css")]
        })
    ], QuotessComponent);
    return QuotessComponent;
}());

;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map