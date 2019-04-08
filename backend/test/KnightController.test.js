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
     position: 'D1'
   }
   request.post(`/knight`)
          .send(params)
          .expect(200)
          .end(done);

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
