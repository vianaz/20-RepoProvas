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
};
