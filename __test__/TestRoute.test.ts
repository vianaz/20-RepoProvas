import supertest from "supertest";
// import { execSync } from "child_process";
import { App } from "@/app";
import prisma from "@db/database";
import { TestFactory } from "./factories/TestFactory";
import { AuthTestFactory } from "./factories/AuthTestFactory";
import { Application } from "express";

describe("POST /test", () => {
  it("should return 401 (without_token)", async () => {
    const { app } = new App();

    const response = await supertest(app).post("/test").send("");

    expect(response.status).toBe(401);
  });

  it("should return 422 (empty_field)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("empty_field"));

    expect(response.status).toBe(422);
  });

  it("should return 201 (insert_test)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test"));

    expect(response.status).toBe(201);
  });

  afterAll(() => prisma.$disconnect);
});

const getToken = async (app: Application) => {
  const response = await supertest(app)
    .post("/signin")
    .send(AuthTestFactory.createSignIn("correct_signIn"));

  return response.body.token;
};
