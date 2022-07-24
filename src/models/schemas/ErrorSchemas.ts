export const errorSchemas = {
  error_password_mismatch: {
    statusCode: 422,
    message: "Password and confirm password do not match",
  },
  error_format_invalid: {
    statusCode: 422,
    message: "Invalid format",
  },
  error_email_already_exists: {
    statusCode: 409,
    message: "Email already exists",
  },
  error_email_not_found: {
    statusCode: 404,
    message: "Email not found",
  },
  error_password_invalid: {
    statusCode: 422,
    message: "Password is invalid",
  },
};
