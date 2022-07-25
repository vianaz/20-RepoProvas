"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUp = exports.SignIn = void 0;

var _AuthService = require("../services/AuthService");

class SignIn {
  static async signIn(req, res) {
    const token = await _AuthService.AuthService.login(res.locals);
    res.send({
      token
    });
  }

}

exports.SignIn = SignIn;

class SignUp {
  static async signUp(req, res) {
    _AuthService.AuthService.insertUser(req.body);

    res.sendStatus(201);
  }

}

exports.SignUp = SignUp;