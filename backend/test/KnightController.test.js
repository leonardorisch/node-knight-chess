const KnightController = require("../knight/KnightController");
const supertest = require("supertest");
const app = require("../server.js");

let request = null;
let server = null;

beforeAll(function(done) {
  server = app.listen(done);
  request = supertest.agent(server);
});

afterAll(function(done) {
  server.close(done);
});

describe("post knight position", () => {
  test("when data is valid", async done => {
    const params = {
      position: "A1"
    };
    const expectedFirstMovements = ["C2", "B3"];
    const expectedSecondMovements = [
      "E1",
      "E3",
      "A1",
      "A3",
      "D4",
      "B4",
      "D2",
      "D4",
      "C1",
      "C5",
      "A1",
      "A5"
    ];

    request
      .post(`/knight`)
      .send(params)
      .then(response => {
        expect(JSON.parse(response.text)).toEqual({
          firstMovements: expectedFirstMovements,
          secondMovements: expectedSecondMovements
        });
        done();
      });
  });

  test("when data is invalid", async done => {
    const params = {
      position: "D15"
    };
    request
      .post(`/knight`)
      .send(params)
      .expect(400)
      .expect("Check your data")
      .end(done);
  });
});
