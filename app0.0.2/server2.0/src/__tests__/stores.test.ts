import request from "supertest";
import exress from "express";
const app = exress();
describe("GET /store", () => {
  test("responds with json ", () => {
    request(app).get("/store").expect(200);
  });
});
