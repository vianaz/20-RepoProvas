import { faker } from "@faker-js/faker";

const fakerPassword = faker.internet.password();
const signupObject = {
  empty_space: {},
  existing_email: {
    email: "gabriel@gabriel.com",
    password: fakerPassword,
    confirmPassword: fakerPassword,
  },
  incorrect_password: {
    email: faker.internet.email(),
    password: fakerPassword,
    confirmPassword: "1234567",
  },
  correct_password: {
    email: faker.internet.email(),
    password: fakerPassword,
    confirmPassword: fakerPassword,
  },
};

type SignUpTestTypes = keyof typeof signupObject;

export class AuthTestFactory {
  //   static createSignIn(): SignIn {
  //     return new SignIn();
  //   }

  static createSignUp(type: SignUpTestTypes) {
    return signupObject[type];
  }
}
