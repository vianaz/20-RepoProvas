export interface ISignIn {
  email: string;
  password: string;
}
export interface ISignUp extends ISignIn {
  confirmPassword: string;
}
