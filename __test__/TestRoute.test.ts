import supertest from "supertest";
// import { execSync } from "child_process";
import prisma from "@db/database";
import { TestFactory } from "./factories/TestFactory";
import { AuthTestFactory } from "./factories/AuthTestFactory";
import { Application } from "express";
import { App } from "../src/app";

const getToken = async (app: Application) => {
  const response = await supertest(app)
    .post("/signin")
    .send(AuthTestFactory.createSignIn("correct_signIn"));

  return response.body.token;
};

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

  it("should return 404 (insert_test_teacher_wrong)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_teacher_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 404 (inser_test_category_wrong)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_category_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 404 (inser_test_discipline_wrong)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_discipline_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 201 (insert_test)", async () => {
    const { app } = new App();
    const token = await getToken(app);
    const data = TestFactory.createInsertTest("insert_test") as any;

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(data);

    const isInserted = await prisma.tests.findFirst({
      where: { name: data.name },
    });

    expect(response.status).toBe(201);
    expect(isInserted).toBeDefined();
  });
  afterAll(() => prisma.$disconnect);
});
