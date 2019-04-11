const KnightController = require('../knight/KnightController');
const supertest = require('supertest');
const app = require('../server.js');

let request = null
let server = null

beforeAll(function(done){
  server = app.listen(done)
  request = supertest.agent(server)
})

afterAll(function(done){
  server.close(done)
})

describe('post knight position', () => {
 test('when data is valid', async (done) => {
   const params = {
     position: 'A1'
   }
   const expectedFirstMovements = [{"x":3,"y":2,"position":"C2"},{"x":2,"y":3,"position":"B3"}];
   const expectedSecondMovements = [
     {"x":5,"y":1,"position":"E1"},{"x":5,"y":3,"position":"E3"},{"x":1,"y":1,"position":"A1"},{"x":1,"y":3,"position":"A3"},
     {"x":4,"y":4,"position":"D4"},{"x":2,"y":4,"position":"B4"},{"x":4,"y":2,"position":"D2"},
     {"x":4,"y":4,"position":"D4"},{"x":3,"y":1,"position":"C1"},{"x":3,"y":5,"position":"C5"},
     {"x":1,"y":1,"position":"A1"},{"x":1,"y":5,"position":"A5"}
   ]

   request.post(`/knight`)
          .send(params)
          .then(response => {
            expect(JSON.parse(response.text)).toEqual({"firstMovements": expectedFirstMovements, "secondMovements": expectedSecondMovements})
            done();
          })
 });

 test('when data is invalid', async (done) => {
   const params = {
     position: 'D15'
   }
   request.post(`/knight`)
          .send(params)
          .expect(400)
          .expect('Check your data')
          .end(done);
 });
});
