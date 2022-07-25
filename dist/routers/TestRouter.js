"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestRouter = void 0;

var _TestController = require("../controllers/TestController");

var _testInsertMiddleware = require("../middlewares/testInsertMiddleware");

var _tokenMiddleware = require("../middlewares/tokenMiddleware");

var _express = require("express");

class TestRouter {
  constructor() {
    this.router = (0, _express.Router)();
    this.routes();
  }

  routes() {
    const {
      router
    } = this;
    router.use(_tokenMiddleware.tokenMiddleware);
    router.post("/test", _testInsertMiddleware.testInsertMiddleware, _TestController.TestController.insertTest);
    router.get("/test/terms", _TestController.TestController.getByTerms);
    router.get("/test/teachers", _TestController.TestController.getByTeacher);
  }

}

exports.TestRouter = TestRouter;