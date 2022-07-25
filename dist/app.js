"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

require("express-async-errors");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _AuthRouter = require("./routers/AuthRouter");

var _errorHandlerMiddlawere = require("./middlewares/errorHandlerMiddlawere");

var _TestRouter = require("./routers/TestRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.app = (0, _express.default)();
    this.config();
    this.buildRouters();
  }

  config() {
    const {
      app
    } = this;
    app.use((0, _cors.default)());
    app.use(_express.default.json());
  }

  buildRouters() {
    const {
      app
    } = this;
    app.use(new _AuthRouter.AuthRouter().router);
    app.use(new _TestRouter.TestRouter().router);
    app.use(_errorHandlerMiddlawere.errorHandlerMiddleware);
  }

}

exports.App = App;