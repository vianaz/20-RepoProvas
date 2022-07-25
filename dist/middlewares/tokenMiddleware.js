"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenMiddleware = void 0;

var _ErrorFactory = require("../factories/ErrorFactory");

var _JWTUtils = require("../utils/JWTUtils");

const tokenMiddleware = async (req, res, next) => {
  const token = (req.headers["x-access-token"] || req.headers["authorization"])?.split(" ")[1];
  if (!token) throw new _ErrorFactory.ErrorFactory("error_without_token").error;
  const isCorrectToken = await _JWTUtils.JWTUtils.verify(token);
  if (!isCorrectToken) throw new _ErrorFactory.ErrorFactory("error_token_invalid").error;
  next();
};

exports.tokenMiddleware = tokenMiddleware;