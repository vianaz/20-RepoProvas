"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpMiddleware = void 0;

var _ErrorFactory = require("../factories/ErrorFactory");

var _FindRepository = require("../repositories/FindRepository");

var _joiSchemas = require("../models/schemas/joiSchemas");

const signUpMiddleware = async (req, res, next) => {
  const {
    error
  } = _joiSchemas.SignUpSchema.validate(req.body);

  if (error) throw new _ErrorFactory.ErrorFactory("error_format_invalid").error;
  const {
    password,
    confirmPassword
  } = req.body;
  const emailAreadyUsed = await _FindRepository.FindRepository.findUnique("Users", {
    where: {
      email: req.body.email
    }
  });
  if (password !== confirmPassword) throw new _ErrorFactory.ErrorFactory("error_password_mismatch").error;
  if (!!emailAreadyUsed) throw new _ErrorFactory.ErrorFactory("error_email_already_exists").error;
  next();
};

exports.signUpMiddleware = signUpMiddleware;