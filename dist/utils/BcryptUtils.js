"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BcryptUtils = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BcryptUtils {
  static async encrypt(data) {
    return await _bcrypt.default.hash(data, 10);
  }

  static async compare(password, hash) {
    return await _bcrypt.default.compare(password, hash);
  }

}

exports.BcryptUtils = BcryptUtils;