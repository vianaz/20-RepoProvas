"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testInsertMiddleware = void 0;

var _ErrorFactory = require("../factories/ErrorFactory");

var _joiSchemas = require("../models/schemas/joiSchemas");

const testInsertMiddleware = async (req, res, next) => {
  const {
    error
  } = _joiSchemas.TestInsertSchema.validate(req.body);

  if (error) throw new _ErrorFactory.ErrorFactory("error_format_invalid").error;
  next();
};

exports.testInsertMiddleware = testInsertMiddleware;