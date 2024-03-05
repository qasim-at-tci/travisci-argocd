const request = require("supertest");
const { expect } = require("expect");

const app = require("../app.js");

describe("/api/v1/hello", () => {
  it("check uptime endpoint", async () => {
    const response = await request(app).get("/uptime");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
  });

  it("respond with valid payload", async () => {
    const response = await request(app).get("/api/v1/hello");

    expect(response.body.info).toBe("Hello, World!");
  });
});
