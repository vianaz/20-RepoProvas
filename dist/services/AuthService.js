"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;

var _InsertRepository = require("../repositories/InsertRepository");

var _BcryptUtils = require("../utils/BcryptUtils");

var _JWTUtils = require("../utils/JWTUtils");

class AuthService {
  static async insertUser(data) {
    const {
      email,
      password
    } = data;
    const hashedPassword = await _BcryptUtils.BcryptUtils.encrypt(password);
    return await _InsertRepository.InsertRepository.insert("Users", {
      email,
      password: hashedPassword
    });
  }

  static async login(data) {
    return _JWTUtils.JWTUtils.sign(data);
  }

}

exports.AuthService = AuthService;