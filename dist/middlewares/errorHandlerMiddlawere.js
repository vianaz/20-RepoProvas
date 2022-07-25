"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandlerMiddleware = void 0;

const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(err.statusCode).send(err.message);
};

exports.errorHandlerMiddleware = errorHandlerMiddleware;