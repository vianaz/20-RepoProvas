"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestInsertSchema = exports.SignUpSchema = exports.SignInSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SignUpSchema = _joi.default.object({
  email: _joi.default.string().email().required(),
  password: _joi.default.string().required(),
  confirmPassword: _joi.default.string().required()
});

exports.SignUpSchema = SignUpSchema;

const SignInSchema = _joi.default.object({
  email: _joi.default.string().email().required(),
  password: _joi.default.string().required()
});

exports.SignInSchema = SignInSchema;

const TestInsertSchema = _joi.default.object({
  name: _joi.default.string().required(),
  pdfUrl: _joi.default.string().uri().required(),
  category: _joi.default.string().required(),
  teacher: _joi.default.string().required(),
  discipline: _joi.default.string().required()
});

exports.TestInsertSchema = TestInsertSchema;