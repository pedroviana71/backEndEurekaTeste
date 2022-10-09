const app = require("./app");
const request = require("supertest");

describe("CEP API", () => {
  it("GET /api/:validId ---> 200 status", () => {
    const cep = "31310490";
    return request(app)
      .get(`/api/${cep}/`)
      .expect(200)
      .expect("Content-Type", /json/);
  });
  it("GET /api/:invalidId ---> 404 status", () => {
    const cep = "0";
    return request(app).get(`/api/${cep}/`).expect(404);
  });
});
