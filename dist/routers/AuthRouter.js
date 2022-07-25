"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthRouter = void 0;

var _AuthController = require("../controllers/AuthController");

var _signInMiddleware = require("../middlewares/signInMiddleware");

var _signUpMiddleware = require("../middlewares/signUpMiddleware");

var _express = require("express");

class AuthRouter {
  constructor() {
    this.router = (0, _express.Router)();
    this.routes();
  }

  routes() {
    const {
      router
    } = this;
    router.post("/signin", _signInMiddleware.signInMiddleware, _AuthController.SignIn.signIn);
    router.post("/signup", _signUpMiddleware.signUpMiddleware, _AuthController.SignUp.signUp);
  }

}

exports.AuthRouter = AuthRouter;