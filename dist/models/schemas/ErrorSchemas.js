"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorSchemas = void 0;
const errorSchemas = {
  error_password_mismatch: {
    statusCode: 422,
    message: "Password and confirm password do not match"
  },
  error_format_invalid: {
    statusCode: 422,
    message: "Invalid format"
  },
  error_email_already_exists: {
    statusCode: 409,
    message: "Email already exists"
  },
  error_email_not_found: {
    statusCode: 404,
    message: "Email not found"
  },
  error_password_invalid: {
    statusCode: 422,
    message: "Password is invalid"
  },
  error_without_token: {
    statusCode: 401,
    message: "You need send a token"
  },
  error_token_invalid: {
    statusCode: 401,
    message: "Token is invalid"
  },
  error_category_not_found: {
    statusCode: 404,
    message: "Not found"
  }
};
exports.errorSchemas = errorSchemas;