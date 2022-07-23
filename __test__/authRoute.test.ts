import supertest from "supertest";
import { App } from "../src/app";
import { execSync } from "child_process";
import { AuthTestFactory } from "./factories/AuthTestFactory";
import prisma from "@db/database";

describe("POST /signin", () => {
  beforeAll(async () => {
    execSync("yarn prisma migrate reset --force");
  });
  it("should return SignIn", async () => {
    const { app } = new App();
    const response = await supertest(app).post("/signIn");

    expect(response.text).toBe("SignIn");
    expect(response.status).toBe(200);
  });
  afterEach(() => {
    prisma.$disconnect();
  });
});

describe("POST /signUp", () => {
  it("should return 201 (correct_password)", async () => {
    const { app } = new App();

    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("correct_password"));

    expect(response.status).toBe(201);
  });

  it("should return 422 (incorrect_password)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("incorrect_password"));

    expect(response.status).toBe(422);
  });

  it("should return 422 (empty_space)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("empty_space"));

    expect(response.status).toBe(422);
  });

  it("should return 409 (existing_email)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("existing_email"));

    expect(response.status).toBe(409);
  });
  afterEach(() => {
    prisma.$disconnect();
  });
});
