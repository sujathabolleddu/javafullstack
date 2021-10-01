(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SUJATHA\GIT\javafullstack\src\main.ts */"zUnb");


/***/ }),

/***/ "0o0m":
/*!**************************************************!*\
  !*** ./src/app/interview/interview.component.ts ***!
  \**************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InterviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
InterviewComponent.ɵfac = function InterviewComponent_Factory(t) { return new (t || InterviewComponent)(); };
InterviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterviewComponent, selectors: [["app-interview"]], decls: 2, vars: 0, template: function InterviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "interview works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "2jrR":
/*!****************************************************!*\
  !*** ./src/app/javascript/javascript.component.ts ***!
  \****************************************************/
/*! exports provided: JavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavascriptComponent", function() { return JavascriptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JavascriptComponent {
    constructor() { }
    ngOnInit() {
    }
}
JavascriptComponent.ɵfac = function JavascriptComponent_Factory(t) { return new (t || JavascriptComponent)(); };
JavascriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavascriptComponent, selectors: [["app-javascript"]], decls: 31, vars: 0, template: function JavascriptComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        Closure\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    function bound together with its lexical scope forms a closure, access to its par\n\n    function bound together with its surrounding state or scope\n\n    Uses:\n    Module Design Pattern\n    Currying\n    Functions like once\n    memoize\n    mainatain state in async world\n    setTimeouts\n    Iterators\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SetTimeout - calls when timer is complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "let has a clock scope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Throttling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    Rate limiting a called\n    call is passed to the same function only after the set limit is crossed, even when you make the call multiple times within this time\n    write a throttle function, which takes limit as parameter\n    call the function with a setTimeout\n\n\n    apply and call are similar functions which setthis (context of a function).\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "method takes the arguments separated by comma\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "method takes the arguments as array of arguments\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "bind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\n    call(obj), bind(obj), apply(obj)\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Debouncing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    only call method, when the difference between two calls is executed - on an --Event\n\n\n    difference\n    Make a call after certain amunt of time, for Throttling - Throttling tells us the maximum number of times a function can be called over a period of time\n    Make a call when there is difference of simetime between two evenets - for example after pause \n    Debouncing means that a function will not be called again until a certain amount of time has passed without it being called\n    --make a call when difference is so much\n\n    Throttling -- you decide how many times youshould call within a specified timer\n    Debouncing - you decide the minimum gap between two calls\n    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hoisting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\n\n    Use noscript tag if you want to show message to the non javascript supported browsers after script tag\n\nIf JS has to run on some event, include in head section\nInclude in body, if script needs to be run when the page loads, no functions\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\nScope of variables, global scope, local scope\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYXZhc2NyaXB0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "6Bix":
/*!******************************************!*\
  !*** ./src/app/kafka/kafka.component.ts ***!
  \******************************************/
/*! exports provided: KafkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KafkaComponent", function() { return KafkaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class KafkaComponent {
    constructor() { }
    ngOnInit() {
    }
}
KafkaComponent.ɵfac = function KafkaComponent_Factory(t) { return new (t || KafkaComponent)(); };
KafkaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KafkaComponent, selectors: [["app-kafka"]], decls: 2, vars: 0, template: function KafkaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Kafka\nProducer\nConsumer\nBroker\nCluster\nTopic\nPartitions\nOffset\nConsumer groups\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYWZrYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "7C6v":
/*!**************************************************!*\
  !*** ./src/app/bootstrap/bootstrap.component.ts ***!
  \**************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BootstrapComponent {
    constructor() { }
    ngOnInit() {
    }
}
BootstrapComponent.ɵfac = function BootstrapComponent_Factory(t) { return new (t || BootstrapComponent)(); };
BootstrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BootstrapComponent, selectors: [["app-bootstrap"]], decls: 2, vars: 0, template: function BootstrapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bootstrap works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib290c3RyYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ATuM":
/*!****************************************************!*\
  !*** ./src/app/apitesting/apitesting.component.ts ***!
  \****************************************************/
/*! exports provided: ApitestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApitestingComponent", function() { return ApitestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ApitestingComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApitestingComponent.ɵfac = function ApitestingComponent_Factory(t) { return new (t || ApitestingComponent)(); };
ApitestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApitestingComponent, selectors: [["app-apitesting"]], decls: 2, vars: 0, template: function ApitestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    HttpCLient \nHttpClient is a low level client for simplifying Http Communication\nHTTP protocol interception\nSecure HTTP connections - SSL/TLS\nHTTP proxy server handling\nHandles HTTP cookies\nConnection pooling for different hosts, keep alive strategy,\nmulti-threaded request execution\nRest Assured \nsimplified testing of REST based services built over HTTP\nValidating REST API response using inbuilt Hemcrest Matchers\nJSON & XML serialization and deserialization\nExtracting JSON data using JsonPath and XML data using XmlPath\nVerifying response body, cookies, headers, content-type and http status\nAuthentication using Basic Auth, Digest Auth, Form Authentication (CSRF support), OAuth (OAuth1 and OAuth2)\nverifying multi-part form data\nRequest and response logging for easy troubleshooting\nSession Filters\nSpring Mock Mvc Module\nSpring Web Test Client Module\nKotlin support\n\n\nRestAssured.baseURI = url + \"/\" + tid;\n        StringBuilder authorization = new StringBuilder();\n        authorization.append(usr).append(\":\").append(pwd);\n        String authHeader = \"Basic \" + Base64.getEncoder().encodeToString(authorization.toString().getBytes());\n\n        RequestSpecification httpRequest = RestAssured.given().header(\"Authorization\", authHeader)\n                .header(\"Content-Type\", \"application/json\")\n                .header(\"Accept\", \"application/vnd.dsttechnologies.awd+xml\");\n        Response response = httpRequest.request(Method.GET);\n\n\nRest Template\nRestTemplate is also a high level REST client which uses HttpClient under the hood, but it is mostly used in development rather than testing. It lacks most of the testing related features readily available in REST Assured like - Assertion capabilities - inbuilt Hemcrest matchers support, ease of use from testing perspective, out of the box support for various authentication protocols, ease of logging requests response, measuring request time, etc.\nSpring Webclient\nSpring WebClient was introduced in Spring Boot 2 for reactive programming. It has following advantages over conventional RestTemplate:\nIt is non-blocking & reactive in nature, so you can achieve more throughput with limited threads. This should definitely reduce the hardware requirements.\nIt has more functional feel. WebClient has a functional, fluent API with reactive types for declarative composition.\nIt has all the features that RestTemplate has to offer in cloud native environment (Load balancing, token relay, oauth2 handling, etc.)\n\nhttps://www.javacodemonk.com/rest-assured-vs-apache-httpclient-and-resttemplate-b50fa3b5\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGl0ZXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DadU":
/*!******************************************************!*\
  !*** ./src/app/javalogging/javalogging.component.ts ***!
  \******************************************************/
/*! exports provided: JavaloggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaloggingComponent", function() { return JavaloggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JavaloggingComponent {
    constructor() { }
    ngOnInit() {
    }
}
JavaloggingComponent.ɵfac = function JavaloggingComponent_Factory(t) { return new (t || JavaloggingComponent)(); };
JavaloggingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaloggingComponent, selectors: [["app-javalogging"]], decls: 2, vars: 0, template: function JavaloggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Java Logging\n    Components\n    \u2022\tLogger - object responsible for capturing log records\n    \u2022\tLogging Handlers or Appender\n    \u2022\tLogging Formatters or Layouts\n    Types of Handler \u2013 custom by extending Handler class\n    \u2022\tStreamHandler \u2013 to output stream\n    \u2022\tConsoleHandler \u2013 console\n    \u2022\tFileHandler \u2013 file in xml format\n    \u2022\tSocketHandler \u2013 remote TCP ports\n    \u2022\tMemoryHandler \u2013 in memory\n    Formatters \u2013 custome by extending Formatter\n    \u2022\tSimpleFormatter \u2013 (console )text\n    \u2022\tXMLFormatter \u2013 (file)  xml\n    Logging levels\n    \u2022\tNine levels , seven standard , two special. Higher values \u2013 high prioirities\n    \u2022\tFINEST - 300\n    \u2022\tFINER - 400\n    \u2022\tFINE - 500\n    \u2022\tConfig - 700\n    \u2022\tINFO \u2013 800\n    \u2022\tWARNING \u2013 900\n    \u2022\tSEVERE \u2013 1000\n    \u2022\tOFF \u2013 Integer.MAX_VALUE \u2013 turns off\n    \u2022\tALL \u2013 Integer.MIN_VALUE \u2013 captures everything\n    Logger.setLevel(Logger.INFO);\n    Logger.log(Level.INFO, \u201Cmessage\u201D);\n    Logger.INFO(\u201Cmessage\u201D)\n    Filter\n    There can be an optional filter, where LogRecord is its parameter to isLoggable, \n    LOGGER.setFilter(new FilterExample()); - set on a class\n    Override  public boolean isLoggable(LogRecord record) to filter messages\n    Record has getMessage method\n    Logging frameworks\n    \u2022\tLog4J\n    \u2022\tLog4J2\n    \u2022\tSLF4J \u2013 Simple Logging Fa\u00E7ade for Java\n    \u2022\tLogback\n    \u2022\ttinyLog\n    \u2022\tPreferred , Logback is default in Spring Boot\n    \u2022\tLog4J is old ,go for Log4J2\n    \u2022\tLogback uses SLF4j\n    \u2022\t\n    \u2022\tlogback-core, slf4j-api\n    \u2022\tlogback-classic dependency for runtime\n    \u2022\tprivate static final Logger  logger = LoggerFactory.logger(classname)\n    \u2022\tconfiguration file logback.xml  in classpath\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYXZhbG9nZ2luZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "GRpk":
/*!******************************************************!*\
  !*** ./src/app/collections/collections.component.ts ***!
  \******************************************************/
/*! exports provided: CollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CollectionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CollectionsComponent.ɵfac = function CollectionsComponent_Factory(t) { return new (t || CollectionsComponent)(); };
CollectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionsComponent, selectors: [["app-collections"]], decls: 2, vars: 0, template: function CollectionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "collections works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xsZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 1, vars: 0, template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Welcome! ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "MBRK":
/*!****************************************************!*\
  !*** ./src/app/springboot/springboot.component.ts ***!
  \****************************************************/
/*! exports provided: SpringbootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringbootComponent", function() { return SpringbootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpringbootComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpringbootComponent.ɵfac = function SpringbootComponent_Factory(t) { return new (t || SpringbootComponent)(); };
SpringbootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpringbootComponent, selectors: [["app-springboot"]], decls: 22, vars: 0, consts: [["src", "../../assets/spboot.PNG", "alt", "Spring Boot Pic"]], template: function SpringbootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    @SpringBootApplication\n= @EnableAutoConfiguration+ @ComponentScan + @Configuration\nScheduling\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Key components");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nCLI, Auto configuration, starters, actuators\n\n\nUse Request Mapping if you have to send any parameters\nactuators include auditing, health, CPU usage, HTTP hits, and metric gathering, and many more that are automatically applied to your application.\nTo enable actuator , add actuator starter dependency\nApi'end points in actuator\nHealth\nInfo\nBeans\nMappings\nConfigprops\nHttptrace\nHeapdump\nThreaddump\nShutdown\n\n\nDebugging logs can be enabled in three ways -\n\nWe can start the application with --debug switch.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We can set the logging.level.root=debug property in application.property file.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nWe can set the logging level of the root logger to debug in the supplied logging configuration file.\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\nSetter Injection\nConstructor Injection\nField Injection\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Disbale autoconfiguration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\nusing exclude or\nspring.autoconfigure.exclude property in applc.properties\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register a Custom Auto-Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=com.baeldung.autoconfigure.CustomAutoConfiguration\nplace it under resources/META-INF/spring.factories file\n\nTo instruct an auto-configuration class to back off when a bean already exists, we can use the @ConditionalOnMissingBean annotation.\n\nspring-boot-maven-plugin - package as jar with all dependencies and embedded server\n\nfor War\nmention packaging tag as War\nand define the scope of starter-tomcat to provided\n\nSpring Boot provides support for external configuration, allowing us to run the same application in various environments. We can use properties files, YAML files, environment variables, system properties and command-line option arguments to specify configuration properties.\n\nWe can then gain access to those properties using the @Value annotation, a bound object via the @ConfigurationProperties annotation, or the Environment abstraction.\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IOC container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\nFramework which implements automatic dependency injection, manages object creation, life cycle of bean and injects dependencies into class\n\n@Scheduled(cron = \"$ flower schedule.cron \")\n@Scheduled(fixedRate = 1000)\n@Scheduled(fixedDelay = 1000, initialDelay = 1000)\n\nInternal configurations in application-properties\nExternal via command line or VM arguments\nin yaml files\nuse spring profile to give different properties to diff environments\n-DSpring.profiles.active = dev in VM arguments\n\nDeploy as jar or War.\n\nembedded containers \nTomact, Jetty, Undertow\n\nto add others, exclude tomcat and add other dependencies\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcHJpbmdib290LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "MOa6":
/*!************************************************************!*\
  !*** ./src/app/multithreading/multithreading.component.ts ***!
  \************************************************************/
/*! exports provided: MultithreadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultithreadingComponent", function() { return MultithreadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MultithreadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
MultithreadingComponent.ɵfac = function MultithreadingComponent_Factory(t) { return new (t || MultithreadingComponent)(); };
MultithreadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultithreadingComponent, selectors: [["app-multithreading"]], decls: 2, vars: 0, template: function MultithreadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Os contains processes\nProcess contains Threads\nEach process can have only one thread running at a time\n\nLifecycle of a Thread\nNew, Runnable, Running(Non existent), Non Runnable(Block), Terminated\nCreate a Thread Instance, Start a thread, Picked yp by thread schedular and running, (wait, sleep etc), once run method is executed\n\nCreation of Threads\nThread can be created in two types\nExtend Thread class \u2013 M extends Thread have one run method , in main method M a = new M(), a.start()\nImplement Runnable Interface\nM class implements Runnable, have one run method\nM a = new M()\nThread b = new Thread(a), b.start()\nThread Scheduler\n\nPart of JVM that decides which thread should run\nPreemptive scheduling \u2013 higher priority task runs until it eneters wait\nTime slicing Scheduling \u2013 predefined slice of time and gets back to ready, then next thread starts based on prio\n\nThread Pooling\n\nIf we create many threads , OS may run out of system level threads\nOr each thread gets very less time for execution\nThread Pool Pattern helps to save resources in multithreaded app\nWe write concurrent code in form of parallel tasks and submit execution it to the instance of thread pool\nInstance controls the threads to execute these tasks\nTask Submitters \u2013 create and submit tasks\nExecutor service \u2013 contains Task Queue and Thread pool, returns a future object for fine tuning the result\nCan take a runnable or callable object as input thread for execution\n\nExecutors, when the fine tuning of result is not required\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdWx0aXRocmVhZGluZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "MY4z":
/*!******************************************!*\
  !*** ./src/app/solid/solid.component.ts ***!
  \******************************************/
/*! exports provided: SolidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolidComponent", function() { return SolidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SolidComponent {
    constructor() { }
    ngOnInit() {
    }
}
SolidComponent.ɵfac = function SolidComponent_Factory(t) { return new (t || SolidComponent)(); };
SolidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SolidComponent, selectors: [["app-solid"]], decls: 2, vars: 0, template: function SolidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Single Responsibility Principle\na class should only have one responsibility. Furthermore, it should only have one reason to change\nTesting, Lower coupling, Organization\nOpen closed Principle\nOpen for Extension, Closed for Modification\nclasses should be open for extension but closed for modification. In doing so, we stop ourselves from modifying existing code and causing potential new bugs\nLiskov Substitution Principle\nif class A is a subtype of class B, we should be able to replace B with A without disrupting the behavior of our program.\nInterface segregation Principle\nlarger interfaces should be split into smaller ones. By doing so, we can ensure that implementing classes only need to be concerned about the methods that are of interest to them.\nDependency Injection\nThe principle of dependency inversion refers to the decoupling of software modules. This way, instead of high-level modules depending on low-level modules, both will depend on abstractions.\n\nDRY \u2013 Don\u2019t repeat yourself\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "O9/W":
/*!****************************************!*\
  !*** ./src/app/rest/rest.component.ts ***!
  \****************************************/
/*! exports provided: RestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestComponent", function() { return RestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RestComponent {
    constructor() { }
    ngOnInit() {
    }
}
RestComponent.ɵfac = function RestComponent_Factory(t) { return new (t || RestComponent)(); };
RestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestComponent, selectors: [["app-rest"]], decls: 5, vars: 0, consts: [["src", "../../assets/pic1.png", "alt", "Test"]], template: function RestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Jersey\n\nJAX-RS Implementation \u2013 Jersey, RestEasy\nAnnotations\n@Path(\u201C/hello\u201D)\n@GET\n@Produces(MEDIA_TYPE.)\n@PathParam\n@FormParam\n@QueryParam\n@HeaderParam\n@CookieParam\nTesting jersey\nOrg.glassfish.jersey.client.ClientConfig\n\nJavax.ws.rx.client. Client, ClientBuilder, WebTarget, UriBuilder\n\nClientConfig config = new ClientConfig();\nClient client = ClientBuilder.newClient(config)\nWebTarget target = client.traget(getBaseUri);\n\nJersey servlet : org.glassfish.jersey.servlet.ServletContainer\n1.\t   init-param\n    2.\t        param-name>jersey.config.server.provider.packages param-name\n    3.\t        param-value>com.javatpoint.rest param-value  \n    4.\t    init-param\n\n    Response object building \nResponse.status(200)  .entity(\"getDate is called, year/month/day : \" + date)    .build();  \n  ResponseBuilder response = Response.ok((Object) file);  \nresponse.header(\"Content-Disposition\",\"attachment; filename=\\\"javatpoint_file.txt\\\"\");  \n        return response.build();  \n        Spring Rest\n        @RestController - @Controller plus @ResponseBody \u2013 no need on each method\n        @GetMapping\n        @PostMapping \u2013 accepts @RequestBody(\u201C/pathname\u201D)\n        Object create(@RequestBody Object obj)\n        @PutMapping\n        @DeleteMapping(\u201C/pathname/ flower brace id\u201D)\n        Void delete(@PathVariable Integer id)\n        @RequestParam \u2013 optional parameters \u2013 required = false\n        ErrorHandling\n\n        @GetMapping and @PostMapping if there are no parameters\n        For parameters, use @RequestMapping\nTwo types of error messages\nHTTP status codes\nText messages\nJSON Messages\nErrorMessage classes\n\nResponse Entity \u2013 can send a happy path and exception path\n@ExceptionHandler \u2013 can handle exceptions \u2013 return error message \u2013 can use in same class in a different method\nWhen exceptions are routed to a different class, annotate with\n@ControllerAdvice \u2013 global exception handling \u2013 send error message\nAnd has @ExceptionHandler\n\nResponseEntity(object, HTTPStatus)\nValidation\nValidate in model,annotate constraints properties, add @valid on input ,Method ArgumentNotValidException\n@NotNull,@AssertTreue,@Max,@Min,@size,@Digits,@Pattern,@NotEmpty, @NotBlank(Nowhitespaces),@Positive,@Negative,@Email,@Past,@Future\nTesting\nData Layer testing\n@DataJpaTest\n@WebMvcTest on class\n\n@MockBean\nAutowire MockMvc\nHTTP Status codes\n\n1XX \u2013 Informational\n2xx \u2013 Success\n3xx- Redirection\n4xx- Client errors\n5xx- Server errors\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n                \n    \n \n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "P2UR":
/*!****************************************!*\
  !*** ./src/app/json/json.component.ts ***!
  \****************************************/
/*! exports provided: JsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonComponent", function() { return JsonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JsonComponent {
    constructor() { }
    ngOnInit() {
    }
}
JsonComponent.ɵfac = function JsonComponent_Factory(t) { return new (t || JsonComponent)(); };
JsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonComponent, selectors: [["app-json"]], decls: 3, vars: 0, template: function JsonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    @JsonProperty(\u201CFirst\u201D)\n@JsonIgnore\n@JsonIgnoreProperties\n@JsonInclude(JsonInclude.Include.NON_NULL)\n@JsonManagedReference - parent child relation\n@JsonBackReference \u2013 child parent relation\n@Embeddable in child class and @Embedded in the composing class\nFor list of objects\n@OneToMany(cascade = CascadeType.All)\n\nIf @ManyToOne and @OneToMany is used in same class, use @Json..reference\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqc29uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PAVq":
/*!************************************************!*\
  !*** ./src/app/security/security.component.ts ***!
  \************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SecurityComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecurityComponent.ɵfac = function SecurityComponent_Factory(t) { return new (t || SecurityComponent)(); };
SecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecurityComponent, selectors: [["app-security"]], decls: 2, vars: 0, template: function SecurityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Security\nOpenID Connect\nOAuth 2.0\nJWT\nKeycloak\nKong API\n\n\n\nSecurity Design Considerations\nAuthentication\nAuthorization\nTransport Protection\nJust use HTTPS from browser to backend service, or back to backend service calls\nUses SSL protocol \u2013 Secured Socket layer(Old)\nNew is TLS \u2013 Transport layer security\nSSL Certificates are used \nCross origin Resource sharing(CORS)\nBrowsers restrict client side code in being able to make http requests to any site other than site that client code came from\nHeaders \u2013 Access-Control-Allow-Origin\nCross site request forgery(CSRF)\nWhen using cookies\nForms authentication to secure sessions cookies\nToken based protocols eliminate this\nCross site Scripting(XSS)\n\nTake direct input from user as string and inject it directly into DOM\nIf input contains expressions or script block, it will get executed or setup event handlers\nAngular sanitizes inputs in data binding and escape script blocks\n\nSecuring on client side\nRouteGuards\nFilter data\nPage navigation restrictions\nHide/Disable actions\nSecure on server side to filter data\nControl access to api\u2019s\n\nOpenID Connect\nAssumes you will use oauth for authorization\nSame JWT token format\nStandardizes flows for collecting credentials from client and issuing tokens\nOauth2\nAuthorization\n\nIdentity Provider\nAuthetication server\nAuthorization server\nSSO Server\nSTS \u2013 security token service\nUser Agent\nPiece of software the user is interacting with, client app or OS\nClient\nResource\nScope\nJWT\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cml0eS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "PVzW":
/*!**************************************!*\
  !*** ./src/app/css/css.component.ts ***!
  \**************************************/
/*! exports provided: CssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssComponent", function() { return CssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CssComponent {
    constructor() { }
    ngOnInit() {
    }
}
CssComponent.ɵfac = function CssComponent_Factory(t) { return new (t || CssComponent)(); };
CssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CssComponent, selectors: [["app-css"]], decls: 2, vars: 0, template: function CssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    display : inline\ndispaly : inline-block\n\nbox model\nThe way elements are looked at by the browser \n\nis box\nmargin-> border-->padding --> width and height\n\n\nCOlumn layout\n\nfloat\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "QCp3":
/*!****************************************!*\
  !*** ./src/app/java/java.component.ts ***!
  \****************************************/
/*! exports provided: JavaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaComponent", function() { return JavaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["designpatterns"]; };
const _c1 = function () { return ["multithreading"]; };
const _c2 = function () { return ["javaio"]; };
class JavaComponent {
    constructor() { }
    ngOnInit() {
    }
}
JavaComponent.ɵfac = function JavaComponent_Factory(t) { return new (t || JavaComponent)(); };
JavaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaComponent, selectors: [["app-java"]], decls: 19, vars: 6, consts: [[1, "row"], [1, "col-md-2"], [3, "routerLink"], [1, "col-md-6", 2, "border", "solid 2px"], [1, "col-md-4"]], template: function JavaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Design Patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MultiThreading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Java IO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Interview Questions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "       Implementing Iterator class to accept arrays,\n        collections and maps\n   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYXZhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RMUl":
/*!**************************************************!*\
  !*** ./src/app/sonarqube/sonarqube.component.ts ***!
  \**************************************************/
/*! exports provided: SonarqubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonarqubeComponent", function() { return SonarqubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SonarqubeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SonarqubeComponent.ɵfac = function SonarqubeComponent_Factory(t) { return new (t || SonarqubeComponent)(); };
SonarqubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SonarqubeComponent, selectors: [["app-sonarqube"]], decls: 2, vars: 0, template: function SonarqubeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Codecoverage tool to check the unit test coverage\napply the Gradle Jacoco plugin to your project and run a SonarQube scan to generate a code coverage report\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb25hcnF1YmUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RU7S":
/*!******************************************!*\
  !*** ./src/app/html5/html5.component.ts ***!
  \******************************************/
/*! exports provided: Html5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5Component", function() { return Html5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Html5Component {
    constructor() { }
    ngOnInit() {
    }
}
Html5Component.ɵfac = function Html5Component_Factory(t) { return new (t || Html5Component)(); };
Html5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Html5Component, selectors: [["app-html5"]], decls: 2, vars: 0, template: function Html5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "html5 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodG1sNS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/java"]; };
class AppComponent {
    constructor() {
        this.title = 'fullstackdeveloperjava';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 153, vars: 2, consts: [[2, "background-color", "blueviolet"], [1, "navbar", "navbar-expand", "navbar-light", "bg-light"], [1, "nav", "nav-pills"], [1, "nav-link", 3, "routerLink"], ["routerLink", "/bootstrap", 1, "nav-link"], ["routerLink", "/collections", 1, "nav-link"], ["routerLink", "/angular", 1, "nav-link"], ["routerLink", "/html5", 1, "nav-link"], ["routerLink", "/javascript", 1, "nav-link"], ["routerLink", "/css", 1, "nav-link"], ["routerLink", "/microservices", 1, "nav-link"], ["routerLink", "/javalogging", 1, "nav-link"], ["routerLink", "/aws", 1, "nav-link"], ["routerLink", "/gitlab", 1, "nav-link"], ["routerLink", "/veracode", 1, "nav-link"], ["routerLink", "/sonarqube", 1, "nav-link"], ["routerLink", "/apitesting", 1, "nav-link"], ["routerLink", "/solid", 1, "nav-link"], ["routerLink", "/codereview", 1, "nav-link"], ["routerLink", "designpatterns", 1, "nav-link"], ["routerLink", "/rest", 1, "nav-link"], ["routerLink", "/json", 1, "nav-link"], ["routerLink", "/testing", 1, "nav-link"], ["routerLink", "/springboot", 1, "nav-link"], ["routerLink", "/kafka", 1, "nav-link"], ["routerLink", "/security", 1, "nav-link"], ["routerLink", "/interview", 1, "nav-link"], [2, "background-color", "lightsteelblue"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OOPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Exception Handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "JDBC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Servlets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reflection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RegularExpressions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Generics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "JVM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Serialization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Java XML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Java Logging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "GitLab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Veracode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "sonarqube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Api Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "SOLID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Code Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Design Patterns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "REST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Spring Boot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Kafka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Spring Core");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Spring Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Spring MVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Spring AOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Spring Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Spring Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Spring JPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Spring Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Spring Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Hibernate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Unit Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Maven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Dockers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X/0d":
/*!************************************************!*\
  !*** ./src/app/veracode/veracode.component.ts ***!
  \************************************************/
/*! exports provided: VeracodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeracodeComponent", function() { return VeracodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VeracodeComponent {
    constructor() { }
    ngOnInit() {
    }
}
VeracodeComponent.ɵfac = function VeracodeComponent_Factory(t) { return new (t || VeracodeComponent)(); };
VeracodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VeracodeComponent, selectors: [["app-veracode"]], decls: 2, vars: 0, template: function VeracodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Veracode is a cloud based solution for application security\nStatic analysis, compiled byte code (SAST \u2013 Satic Application security testing)\nDynamic analysis (DAST )\nIntercative Analysis (IAST)\nSoftware composition Analysis (SCA) and penetration testing\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJhY29kZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _java_java_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./java/java.component */ "QCp3");
/* harmony import */ var _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./microservices/microservices.component */ "wpH8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _javalogging_javalogging_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./javalogging/javalogging.component */ "DadU");
/* harmony import */ var _aws_aws_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aws/aws.component */ "ipx7");
/* harmony import */ var _gitlab_gitlab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gitlab/gitlab.component */ "iZFF");
/* harmony import */ var _veracode_veracode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./veracode/veracode.component */ "X/0d");
/* harmony import */ var _sonarqube_sonarqube_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sonarqube/sonarqube.component */ "RMUl");
/* harmony import */ var _apitesting_apitesting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apitesting/apitesting.component */ "ATuM");
/* harmony import */ var _solid_solid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./solid/solid.component */ "MY4z");
/* harmony import */ var _codereview_codereview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./codereview/codereview.component */ "hjQI");
/* harmony import */ var _designpatterns_designpatterns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./designpatterns/designpatterns.component */ "qdsQ");
/* harmony import */ var _rest_rest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rest/rest.component */ "O9/W");
/* harmony import */ var _json_json_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./json/json.component */ "P2UR");
/* harmony import */ var _testing_testing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./testing/testing.component */ "yI84");
/* harmony import */ var _springboot_springboot_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./springboot/springboot.component */ "MBRK");
/* harmony import */ var _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kafka/kafka.component */ "6Bix");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./security/security.component */ "PAVq");
/* harmony import */ var _multithreading_multithreading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./multithreading/multithreading.component */ "MOa6");
/* harmony import */ var _angular_angular_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./angular/angular.component */ "vEXv");
/* harmony import */ var _html5_html5_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html5/html5.component */ "RU7S");
/* harmony import */ var _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./javascript/javascript.component */ "2jrR");
/* harmony import */ var _css_css_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./css/css.component */ "PVzW");
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ "7C6v");
/* harmony import */ var _javaio_javaio_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./javaio/javaio.component */ "l0px");
/* harmony import */ var _interview_interview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./interview/interview.component */ "0o0m");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./collections/collections.component */ "GRpk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: 'java',
                    component: _java_java_component__WEBPACK_IMPORTED_MODULE_2__["JavaComponent"],
                    children: [
                        { path: 'designpatterns', component: _designpatterns_designpatterns_component__WEBPACK_IMPORTED_MODULE_14__["DesignpatternsComponent"] },
                        { path: 'multithreading', component: _multithreading_multithreading_component__WEBPACK_IMPORTED_MODULE_21__["MultithreadingComponent"] },
                        { path: 'javaio', component: _javaio_javaio_component__WEBPACK_IMPORTED_MODULE_27__["JavaioComponent"] }
                    ]
                },
                { path: 'microservices', component: _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_3__["MicroservicesComponent"] },
                { path: 'javalogging', component: _javalogging_javalogging_component__WEBPACK_IMPORTED_MODULE_6__["JavaloggingComponent"] },
                { path: 'aws', component: _aws_aws_component__WEBPACK_IMPORTED_MODULE_7__["AwsComponent"] },
                { path: 'gitlab', component: _gitlab_gitlab_component__WEBPACK_IMPORTED_MODULE_8__["GitlabComponent"] },
                { path: 'veracode', component: _veracode_veracode_component__WEBPACK_IMPORTED_MODULE_9__["VeracodeComponent"] },
                { path: 'sonarqube', component: _sonarqube_sonarqube_component__WEBPACK_IMPORTED_MODULE_10__["SonarqubeComponent"] },
                { path: 'apitesting', component: _apitesting_apitesting_component__WEBPACK_IMPORTED_MODULE_11__["ApitestingComponent"] },
                { path: 'solid', component: _solid_solid_component__WEBPACK_IMPORTED_MODULE_12__["SolidComponent"] },
                { path: 'codereview', component: _codereview_codereview_component__WEBPACK_IMPORTED_MODULE_13__["CodereviewComponent"] },
                { path: 'multithreading', component: _multithreading_multithreading_component__WEBPACK_IMPORTED_MODULE_21__["MultithreadingComponent"] },
                { path: 'rest', component: _rest_rest_component__WEBPACK_IMPORTED_MODULE_15__["RestComponent"] },
                { path: 'json', component: _json_json_component__WEBPACK_IMPORTED_MODULE_16__["JsonComponent"] },
                { path: 'testing', component: _testing_testing_component__WEBPACK_IMPORTED_MODULE_17__["TestingComponent"] },
                { path: 'springboot', component: _springboot_springboot_component__WEBPACK_IMPORTED_MODULE_18__["SpringbootComponent"] },
                { path: 'kafka', component: _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_19__["KafkaComponent"] },
                { path: 'security', component: _security_security_component__WEBPACK_IMPORTED_MODULE_20__["SecurityComponent"] },
                { path: 'angular', component: _angular_angular_component__WEBPACK_IMPORTED_MODULE_22__["AngularComponent"] },
                { path: 'html5', component: _html5_html5_component__WEBPACK_IMPORTED_MODULE_23__["Html5Component"] },
                { path: 'javascript', component: _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_24__["JavascriptComponent"] },
                { path: 'css', component: _css_css_component__WEBPACK_IMPORTED_MODULE_25__["CssComponent"] },
                { path: 'bootstrap', component: _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_26__["BootstrapComponent"] },
                { path: 'collections', component: _collections_collections_component__WEBPACK_IMPORTED_MODULE_29__["CollectionsComponent"] },
                { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _java_java_component__WEBPACK_IMPORTED_MODULE_2__["JavaComponent"],
        _microservices_microservices_component__WEBPACK_IMPORTED_MODULE_3__["MicroservicesComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
        _javalogging_javalogging_component__WEBPACK_IMPORTED_MODULE_6__["JavaloggingComponent"],
        _aws_aws_component__WEBPACK_IMPORTED_MODULE_7__["AwsComponent"],
        _gitlab_gitlab_component__WEBPACK_IMPORTED_MODULE_8__["GitlabComponent"],
        _veracode_veracode_component__WEBPACK_IMPORTED_MODULE_9__["VeracodeComponent"],
        _sonarqube_sonarqube_component__WEBPACK_IMPORTED_MODULE_10__["SonarqubeComponent"],
        _apitesting_apitesting_component__WEBPACK_IMPORTED_MODULE_11__["ApitestingComponent"],
        _solid_solid_component__WEBPACK_IMPORTED_MODULE_12__["SolidComponent"],
        _codereview_codereview_component__WEBPACK_IMPORTED_MODULE_13__["CodereviewComponent"],
        _designpatterns_designpatterns_component__WEBPACK_IMPORTED_MODULE_14__["DesignpatternsComponent"],
        _rest_rest_component__WEBPACK_IMPORTED_MODULE_15__["RestComponent"],
        _json_json_component__WEBPACK_IMPORTED_MODULE_16__["JsonComponent"],
        _springboot_springboot_component__WEBPACK_IMPORTED_MODULE_18__["SpringbootComponent"],
        _kafka_kafka_component__WEBPACK_IMPORTED_MODULE_19__["KafkaComponent"],
        _security_security_component__WEBPACK_IMPORTED_MODULE_20__["SecurityComponent"],
        _multithreading_multithreading_component__WEBPACK_IMPORTED_MODULE_21__["MultithreadingComponent"],
        _angular_angular_component__WEBPACK_IMPORTED_MODULE_22__["AngularComponent"],
        _html5_html5_component__WEBPACK_IMPORTED_MODULE_23__["Html5Component"],
        _javascript_javascript_component__WEBPACK_IMPORTED_MODULE_24__["JavascriptComponent"],
        _css_css_component__WEBPACK_IMPORTED_MODULE_25__["CssComponent"],
        _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_26__["BootstrapComponent"],
        _javaio_javaio_component__WEBPACK_IMPORTED_MODULE_27__["JavaioComponent"],
        _interview_interview_component__WEBPACK_IMPORTED_MODULE_28__["InterviewComponent"],
        _collections_collections_component__WEBPACK_IMPORTED_MODULE_29__["CollectionsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "hjQI":
/*!****************************************************!*\
  !*** ./src/app/codereview/codereview.component.ts ***!
  \****************************************************/
/*! exports provided: CodereviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodereviewComponent", function() { return CodereviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CodereviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
CodereviewComponent.ɵfac = function CodereviewComponent_Factory(t) { return new (t || CodereviewComponent)(); };
CodereviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodereviewComponent, selectors: [["app-codereview"]], decls: 2, vars: 0, template: function CodereviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    SQL Injection\n\n    Use parameterized Queries \u2013 Use prepared statement\n    Use JPA Criteria API\n    User Data sanitization\n    -\tWhitelist \u2013 set of valid input checklist\n    -\tBlacklist \u2013 Not valid input checklist\n    Non Functional Requirements\n    \n    Scalability\n    Availability\n    Reliability.\n    Recoverability.\n    Maintainability.\n    Serviceability.\n    Capacity\n    \n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2RlcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "iZFF":
/*!********************************************!*\
  !*** ./src/app/gitlab/gitlab.component.ts ***!
  \********************************************/
/*! exports provided: GitlabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitlabComponent", function() { return GitlabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GitlabComponent {
    constructor() { }
    ngOnInit() {
    }
}
GitlabComponent.ɵfac = function GitlabComponent_Factory(t) { return new (t || GitlabComponent)(); };
GitlabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GitlabComponent, selectors: [["app-gitlab"]], decls: 3, vars: 0, template: function GitlabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Reposirtory as a project\nContains gitlab-ci.yml which takes care of stages and what needs to be done in each for CI/CD\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaXRsYWIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ipx7":
/*!**************************************!*\
  !*** ./src/app/aws/aws.component.ts ***!
  \**************************************/
/*! exports provided: AwsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsComponent", function() { return AwsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AwsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AwsComponent.ɵfac = function AwsComponent_Factory(t) { return new (t || AwsComponent)(); };
AwsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwsComponent, selectors: [["app-aws"]], decls: 3, vars: 0, template: function AwsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Users\nRoot User\nIAM User\n\nRoot user creates user groups and assigns policies\nCreates a user and assign user group\nEC2 is created using an AMI (image) IaaS(Infrastructure as a Service)\nService roles are automatically created when you need to connect from a service to different service\nCode commit \u2013 Repository\nCode Build \u2013 buildspec.yml \u2013 build commands\nBuilds and pushes it to a bucket in S3\nCode deploy \u2013 deploys the artifact from S3 bucket mentioned to the ec2 instance \u2013 deployappspec.yml\nKeypair\nTags\nCode pipeline \u2013 automated \u2013 cloudwatch\nCloudFormation \u2013 json with all the details\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhd3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "l0px":
/*!********************************************!*\
  !*** ./src/app/javaio/javaio.component.ts ***!
  \********************************************/
/*! exports provided: JavaioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaioComponent", function() { return JavaioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class JavaioComponent {
    constructor() { }
    ngOnInit() {
    }
}
JavaioComponent.ɵfac = function JavaioComponent_Factory(t) { return new (t || JavaioComponent)(); };
JavaioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaioComponent, selectors: [["app-javaio"]], decls: 4, vars: 0, template: function JavaioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    Byte streams - Input Stream\n    \n    ByteArrayoutputSTream, PipedInputSTream, FileInputSTream\n    \n    \n    OutsTream\n    \n    ByteArrayoutputSTream, PipedInputSTream, FIle Outout\n    \n    \n    Reader\n    CharArrayReader, StringReader, PipedReader, InputStreamReader(FileReader)\n    \n    WRiter\n    CharArrayWriter, StringReader, PipedReader, InputStreamReader(FileReader)\n    \n    chaining streams\n    inputstreamreader\n    \n    reader over inputstream\n    Classes available for customization\n    FilterReader, FIlterWriter, FilterInputSTream, FilterOutputSTream\n    \n    Accesing Files\n    \n    FileReader etc are deprectaed\n    \n    Direct fiel access inefficient\n    Use BufferedStreams\n    Buffers content in memory\n    Performs reads/writes in large chunks\n    reduces underlying stream interaction\n    BufferedReader, etc\n    \n    BufferedReader br = new BufferedReader(new FileReader(\"file.txt\"))\n    \n    useful for linebreaks\n    \n    newLine()\n    readLine()\n    \n    \n    NIO classes\n    \n    Path ad Paths\n    \n    Paths.get()\n    \n    BufferedReader br = Files.newBufferedReader(Paths.get(\"file.txt\"))\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    \n    Zip file system\n    \n    \n    Conversion\n    Integer.parseInt()\n    Integer.valueOf()\n    Float.parseFloat()\n    Double.parseDouble()\n    Long.pareLong()\n    \n    Date Conversion\n    SimpleDateFormat and DateFormat\n    Date date1=new SimpleDateFormat(\"dd/MM/yyyy\").parse(sDate1);  \n    \n     SimpleDateFormat formatter1=new SimpleDateFormat(\"dd/MM/yyyy\");  \n     Date d = formatter.parse(String)\n     \n     \n     Date to String\n     \n     Date date = Calendar.getInstance().getTime();  \n    DateFormat dateFormat = new SimpleDateFormat(\"yyyy-mm-dd hh:mm:ss\");  \n    String strDate = dateFormat.format(date);  \n    \n    \n    date = SimpleDateFormat(stringformat).parse(string)\n    \n    string = simpledateFormat(dateformat).format(date)\n    \n    \n    String to char\n    \n    char c=s.charAt(0);\n    char[] ch=s1.toCharArray();    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    \n    \n    \n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYXZhaW8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "qdsQ":
/*!************************************************************!*\
  !*** ./src/app/designpatterns/designpatterns.component.ts ***!
  \************************************************************/
/*! exports provided: DesignpatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignpatternsComponent", function() { return DesignpatternsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DesignpatternsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DesignpatternsComponent.ɵfac = function DesignpatternsComponent_Factory(t) { return new (t || DesignpatternsComponent)(); };
DesignpatternsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignpatternsComponent, selectors: [["app-designpatterns"]], decls: 2, vars: 0, template: function DesignpatternsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "    Creational\nSingleton\nPrototype\nBuilder\nFactory\nAbstract Factory\nObject Pool Pattern\nStructural \nAdapter\nTo connect new code to legacy code without changing the working contract of legacy code\nLike a plug adapter\nCan have multiple adapters\nConvert interface to other interface\nClient, adapter, adaptee\nEx: Arrays.asList()\nBridge\nSimilar to adapter but bridge works with new code\nDecouple abstraction and implementation using encapsulation, composition, inheritance\nChanges in abstraction wont affect the client\nDetails are not available initially\nEx:JDBC drivers\nComposite\nHierarchical type pattern that deals with tree structure of information\nComponents represent part or whole of structure\nObj in tree structures\nInd object treated as composite\nSame operations on individual and composites\nEx: component, java.awt\nDecorator\nHierarchical type pattern with functionality at each level while using composition from similar datatypes\nWrap another object and add functionality to it\nAdd behavior without affecting others\nMore than inheritance\nSRP\nEx: InputStream\nInheritance based\nUtilizes composition and inheritance(is-a and has-a)\nFa\u00E7ade\nTo overcome poorly designed api\nReduces dependencies on outside code\nSimplify client usage\nRefactoring pattern\n1.\tFlyweight\nTo reduce the number of objects created\nString\n2.\tFilter\n3.\tProxy\nBehavioral\n1.\tChain of responsibility\n2.\tCommand\n3.\tInterpreter\n4.\tIterator\n5.\tMediator\n6.\tMomento\n7.\tObserver\n8.\tState\n9.\tStrategy\n10.\tTemplate\n11.\tVisitor\n12.\tNull Object\n\nJ2EE Patterns\nPresentation Layer\n1.\tIntercepting Filter\n2.\tFront controller \n3.\tView Helper\n4.\tComposite View\nBusiness Layer\n1.\tBusiness Delegate\n2.\tService Locator\n3.\tSession Fa\u00E7ade\n4.\tTransfer Object\nIntegration Layer\n1.\tData Access Object\n2.\tWeb Service Broker\n\n1.\tMVC\n2.\tComposite Entity\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25wYXR0ZXJucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vEXv":
/*!**********************************************!*\
  !*** ./src/app/angular/angular.component.ts ***!
  \**********************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AngularComponent {
    constructor() { }
    ngOnInit() {
    }
}
AngularComponent.ɵfac = function AngularComponent_Factory(t) { return new (t || AngularComponent)(); };
AngularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularComponent, selectors: [["app-angular"]], decls: 26, vars: 0, consts: [["href", "currentPage#sectionA"], ["href", "currentPage#sectionB"], ["href", "currentPage#sectionC"], ["id", "sectionA"]], template: function AngularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Section A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Section B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Section C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Linting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\nLint\nPointing out and fixing potential probs in code\nCoding style changes\nMissing semicolons\nDouble vs single quotes\nLong lines\nESlint\nPrettier\nAutomatically fixes\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\nClickon a link\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\nRouter configuration has path define\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\nLoads component template in primary routeroutlet\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n    Router outlet gets triggered when Url is changed\nChecks for matching path \u2013 reprocess redirects\nProcess guards\nResolve data\nActivates components\nDisplay templates\nChanging basepath during deployment\nNg build \u2013base-href /APM/\n\nRouterModule\nDirective: RouterLink, RouterLinkActive, RouterOutlet\n\nInMemoryWebApiModule.forRoot() \u2013 simulate calls to server\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\nRedirects are not chained\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\nUse forRoot  only once in application\nUse forChild for any feature routes\nurl segment in deeplinking\nDeeplinking \u2013 bookmark url and navigate to template of comp\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n\nTo preserve queryParamsHandling = \u201Cpreserve or merge\u201D\nPrefetching data\nRoute\u2019s data property for static data\nRoute resolver\nPage is not displayed until data is fetched\n\nCommunication\n\nCommunication with template\nViewchild and viewchildren\nWith child comp\nWith parent comp\nThrough service\nThrough state management service\nThrough service notifications\nUsing router\nComponent to template\nInterpoation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\nProperty binding img [style.width.px] = \u2018image.width\u2019\n\nTemplate -component\nTwo way binding \u2013 long way\nGetter and setter\nViewchild\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Http");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\nMost front-end applications need to communicate with a server over the HTTP protocol, in order to download or upload data and access other back-end services. Angular provides a client HTTP API for Angular applications, the HttpClient service class in @angular/common/http.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmd1bGFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "wpH8":
/*!**********************************************************!*\
  !*** ./src/app/microservices/microservices.component.ts ***!
  \**********************************************************/
/*! exports provided: MicroservicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesComponent", function() { return MicroservicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MicroservicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicroservicesComponent.ɵfac = function MicroservicesComponent_Factory(t) { return new (t || MicroservicesComponent)(); };
MicroservicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MicroservicesComponent, selectors: [["app-microservices"]], decls: 41, vars: 0, template: function MicroservicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "API Gateway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nZuul, Netty, Finagle\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Service Registry:  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\nEureka, ZooKeeper, Consul\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Circuit Breaker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\nHystrix, Jrugged\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Monitoring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\nKibana, Grafana, Splunk\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\nDropWizrd, Spring Actuator, Promoetheus\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Distributed Tracing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\nDapper, Htrace, Zipkin\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Aggregation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\nLogstash, Splunk, PaperTrial\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Containers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\nDocker, rkt\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Orchestrators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\nKunernetes, Docker Swarm, Mesos\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Load balancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\nRibbon, Meraki\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\nOkta, Keycloak, Shero\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Data Consistency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n\n\n    \nCAP Theorem \u2013 Consistency, Availability, Partition Tolerance\nAvailability or consistency\n\nACID- Atomicity, Conistency, Isolation, Durability\n\nTwo Phase commit Pattern\nACID is mandatory\nChoosing consistency\nTransaction manager manages transaction\nPrepare phase\nVoting phase \nNot in Microservices as of reliability on transaction manager, no voting response and timeout,\nCommit failure after successful vote\nPending transactions lock resources\nAvoid custom impl\nHas scaling out issues\nReduced throughput\nAnti pattern\n\n\nSaga Pattern\nTrading atomicity for availability and consistency\nChooses availability\nSplits transaction into many requests called saga\nTracks each request\nCentralized distributed transaction state\nUsing saga log\nOn fail we send compensate request and rollsback \nImplemented by Saga execution coordinator(SEC) \u2013 state machine\n\nRouting Slip Pattern\nManufacturing example\nSet of instructions attached to work\nDetermine process steps\n, attach to message, message routed in sequence\nNo state centralization\nEventual consistency\n\nBASE \u2013 Basic availability, soft state, eventual consistency\nMicroservice Elements\nDomain driven design\n\nData Store\nNo Distributed transaction \u2013 No two phase commit\nIt will have performance impact\nEventual consistency\nEvent sourcing \u2013 Akka, Kafka, RabbitMQ\nCapture Data Change \u2013 Debezium\nUser Interface \n\nUI aggregation is necessary so user feels it consistent\nServer side page composition\nClient side composition\nServices\n\nCommunication using Remote procedure invocation RPC \u2013 REST, SOAP, gRPC\nMessaging \u2013\nMessage or Event\nBroker or channel\nPublish/Subscribe\nKafka, RabbitMQ\nMessage format \u2013 XML, YAML, JSON(Text) or Binary \u2013 gRPC\nExchanges using API\u2019s and contracts \u2013 SOAP \u2013 WSDL, REST \u2013 Swagger, gRPC- IDL\nExternal configuration for diff env\u2019s\nCan use DB or Archaius, Consul, Decider\nDistributed Services\n\nService Registry to discover services like a phone book\nEach Services registers on start up and deregister during shutdown\nEureka, ZooKeeper, Consul\nCORS comes into picture , should use HTTP headers(Access-control-Allow-Origin)\nCircuit breaker during network issues\nInvoke via proxy in order to deviate calls if needed\nHystrix, Jrugged\nGateway\nFor clients to access individual  multiple services, and has unified interface\nSingle entry points\nHandles cross cutting concerns \u2013 Authentication, Authorization\nIdeal place to handle API transaltaion\nZuul, Netty, Finagle\n\nSecurity\nIdentity and Access Management System IAM\nProvides single sign on\nKerberos, OpenID , Oauth 2.0, SAML - protocols\nOkta, Keycloak, Shero\nIdentity through access token\nJWT, Cookie\n\nScalability and Availability\nVertical scale \u2013 add more power to existing infra \u2013 more CPU and RAm\nHorizontal \u2013 more machines \u2013 service replications, clustering \u2013 client load balancing\nLoad balancer \u2013 Round robin, based on weight , capacity\nRibbon, Meraki \u2013 load balancing tools\n\nMonitoring\nNeeds dashboard\nKibana, Grafana, Splunk\nHealth check \u2013 Heart bits\nLog Aggregation\nLogstash, Splunk, PaperTrial\nException Tracking\nRecord exceptions in centralized\nMetrics\nDropWizrd, Spring Actuator, Promoetheus\nAuditing\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Rate Limiting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rate Limiting\nControl API usage\nDefend DoS attacks \u2013 Limit traffic from particular source\nMonetize api\u2019s\nAlerting\nDistributed Tracing\nTrace entire request using correlation id\nDapper, Htrace, Zipkin\nDeployment\n\nContainers\nDocker, rkt\nOrchestrators\nOrchestrate containers \u2013 Kunernetes, Docker Swarm, Mesos\nContinuous Delivery \u2013 Jenkins, Asgard, Aminator\n\nBrown Field Microservices approach\nOld monolith to micro\nGreenField Microservices\nNew system or application\n\n\n\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaWNyb3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "yI84":
/*!**********************************************!*\
  !*** ./src/app/testing/testing.component.ts ***!
  \**********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TestingComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestingComponent.ɵfac = function TestingComponent_Factory(t) { return new (t || TestingComponent)(); };
TestingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestingComponent, selectors: [["app-testing"]], decls: 3, vars: 0, template: function TestingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    Testing Types\n\nSmoke or Sanity Tests\nContinuos Testing\nRegression Testing\nPerformance Testing\nAcceptance Testing\n\nTesting Levels\nUnits Tests\nIntegration Tests\nSystem Testing\n\nTesting Frameworks\nJunit\nSpring Test\n\n@RunWith(SpringRunner.class)\n@SpringBootTest\n@Test\nAssertJ\nHamcrest\nMatcher Library\nJSON Path\nXpath for JSOn\nMockito \nMocking framework\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map