import supertest from "supertest";
import { execSync } from "child_process";
import prisma from "@db/database";
import { AuthTestFactory } from "@tests/factories/AuthTestFactory";
import { App } from "../src/app";

describe("POST /signup", () => {
  beforeAll(async () => {
    execSync("yarn prisma migrate reset --force");
  });

  it("should return 422 (empty field)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("empty_space"));

    expect(response.status).toBe(422);
  });

  it("should return 422 (differents passwords)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("incorrect_password"));

    expect(response.status).toBe(422);
  });

  it("should return 201 (correct password)", async () => {
    const { app } = new App();

    const response = await supertest(app)
      .post("/signup")
      .send(AuthTestFactory.createSignUp("correct_password"));

    expect(response.status).toBe(201);
  });

  it("should return 409 (existing email)", async () => {
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

describe("POST /signin", () => {
  it("should return 422 (empty fields)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signIn")
      .send(AuthTestFactory.createSignIn("empty_fields"));

    expect(response.status).toBe(422);
  });

  it("should return 404 (incorrect email)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signIn")
      .send(AuthTestFactory.createSignIn("incorrect_email"));

    expect(response.status).toBe(404);
  });

  it("should return 422 (incorrect password)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signIn")
      .send(AuthTestFactory.createSignIn("incorrect_password"));

    expect(response.status).toBe(422);
  });

  it("should return 200 (correct)", async () => {
    const { app } = new App();
    const response = await supertest(app)
      .post("/signIn")
      .send(AuthTestFactory.createSignIn("correct_signIn"));

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
  afterEach(() => {
    prisma.$disconnect();
  });
});
