const app = require("./app");
const getCep = require("./routes/cepRouter");
const nockBack = require("nock").back;
const path = require("path");

nockBack.fixtures = path.join(__dirname, "__nock-fixtures__");
nockBack.setMode("record");

// describe("CEP API", () => {
//   const cep = "31310490";

//   it("GET /api/id ---> 200 status", async () => {
//     const { nockDone } = await nockBack("post-data.json");
//     const data = await getPosts(userId);

//     return request(app)
//       .get(`/api/${cep}`)
//       .expect(200)
//       .expect("Content-Type", /json/);
//   });
// });

test("GET /api/id ---> 200 status", async () => {
  const { nockDone } = await nockBack("post-data.json");

  const data = await getCep(userId);

  expect(data.length).toBeGreaterThan(0);
  data.forEach((post) => {
    expect(post).toEqual(
      expect.objectContaining({
        userId,
      })
    );
  });

  nockDone();
});
