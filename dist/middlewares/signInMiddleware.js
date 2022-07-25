"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInMiddleware = void 0;

var _ErrorFactory = require("../factories/ErrorFactory");

var _FindRepository = require("../repositories/FindRepository");

var _joiSchemas = require("../models/schemas/joiSchemas");

var _BcryptUtils = require("../utils/BcryptUtils");

// verificar caso onde não colocam nada no body
const signInMiddleware = async (req, res, next) => {
  const {
    error
  } = _joiSchemas.SignInSchema.validate(req.body);

  if (error) throw new _ErrorFactory.ErrorFactory("error_format_invalid").error;
  const {
    email,
    password
  } = req.body;
  const userInfo = await _FindRepository.FindRepository.findUnique("Users", {
    where: {
      email
    }
  });
  if (!userInfo) throw new _ErrorFactory.ErrorFactory("error_email_not_found").error;
  const isCorrectPassword = await _BcryptUtils.BcryptUtils.compare(password, userInfo.password);
  if (!isCorrectPassword) throw new _ErrorFactory.ErrorFactory("error_password_invalid").error;
  res.locals = {
    id: userInfo.id,
    email: userInfo.email
  };
  next();
};

exports.signInMiddleware = signInMiddleware;