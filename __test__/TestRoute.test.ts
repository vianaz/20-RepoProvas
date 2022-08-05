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
  it("should return 401 (insert test without token)", async () => {
    const { app } = new App();

    const response = await supertest(app).post("/test").send("");

    expect(response.status).toBe(401);
  });

  it("should return 422 (insert test with empty field)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("empty_field"));

    expect(response.status).toBe(422);
  });

  it("should return 404 (insert test with wrong teacher)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_teacher_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 404 (inser test with wrong category)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_category_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 404 (inser test with wrong discipline)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .post("/test")
      .set("authorization", `Bearer ${token}`)
      .send(TestFactory.createInsertTest("insert_test_discipline_wrong"));

    expect(response.status).toBe(404);
  });

  it("should return 201 (insert test)", async () => {
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

describe("GET /test/terms", () => {
  it("should return 401 (get all tests without token)", async () => {
    const { app } = new App();

    const response = await supertest(app).get("/test/terms");

    expect(response.status).toBe(401);
  });

  it("should return 200 (get all tests by terms)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .get("/test/terms")
      .set("authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
  afterAll(() => prisma.$disconnect);
});

describe("GET /test/teacher", () => {
  it("should return 401 (get all tests without token)", async () => {
    const { app } = new App();

    const response = await supertest(app).get("/test/teacher");

    expect(response.status).toBe(401);
  });

  it("should return 200 (get all tests by teacher)", async () => {
    const { app } = new App();
    const token = await getToken(app);

    const response = await supertest(app)
      .get("/test/teachers")
      .set("authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
  afterAll(() => prisma.$disconnect);
});
