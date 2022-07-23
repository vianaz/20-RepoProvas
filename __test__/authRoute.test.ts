import supertest from "supertest";

import { App } from "../src/app";

describe("Test Auth Routes", () => {
  it("should return SignIn", async () => {
    const { app } = new App();
    const response = await supertest(app).post("/signIn");

    expect(response.text).toBe("SignIn");
    expect(response.status).toBe(200);
  });
  it("should return SignUp", async () => {
    const { app } = new App();
    const response = await supertest(app).post("/signUp");

    expect(response.text).toBe("signUp");
    expect(response.status).toBe(200);
  });
});
