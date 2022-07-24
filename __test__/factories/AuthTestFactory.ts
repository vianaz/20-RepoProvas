import { faker } from "@faker-js/faker";

const fakerPassword = faker.internet.password();
const signUpObject = {
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
const signInObject = {
  correct_signIn: {
    email: "gabriel@gabriel.com",
    password: "123456",
  },
  incorrect_email: {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  incorrect_password: {
    email: "gabriel@gabriel.com",
    password: faker.internet.password(),
  },
  empty_fields: {},
};

type SignUpTestTypes = keyof typeof signUpObject;
type SignInTestTypes = keyof typeof signInObject;

export class AuthTestFactory {
  static createSignIn(type: SignInTestTypes) {
    return signInObject[type];
  }

  static createSignUp(type: SignUpTestTypes) {
    return signUpObject[type];
  }
}
