"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorFactory = void 0;

var _ErrorSchemas = require("../models/schemas/ErrorSchemas");

class ErrorFactory {
  constructor(type) {
    this.error = _ErrorSchemas.errorSchemas[type];
  }

}

exports.ErrorFactory = ErrorFactory;