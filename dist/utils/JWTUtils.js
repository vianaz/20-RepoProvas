"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JWTUtils = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class JWTUtils {
  static async sign(data) {
    return _jsonwebtoken.default.sign(data, process.env.JWT_SECRET, {
      expiresIn: "24h"
    });
  }

  static async verify(token) {
    return _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
  }

}

exports.JWTUtils = JWTUtils;