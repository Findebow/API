// src/api.test.js
const request = require("supertest");
const app = require("../../app");

describe("GET /greeting/:name endpoint", () => {
    it("should return a 200 ok statust code", async () => {
        const res = await request(app).get("/api/greeting/_");
        expect(res.status).toBe(200);
    });
    it("should return the greeting in a object", async () => {
        const res = await request(app).get("/api/greeting/_");
        expect(res.body.greeting).toBe("Hello, _!");
    });
});