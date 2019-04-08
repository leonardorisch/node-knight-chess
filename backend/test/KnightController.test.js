const KnightController = require('../knight/KnightController');
const request = require('supertest');
const server = require('../server.js');
describe('post knight position', () => {
 test('when data is valid', async () => {
   const params = {
     position: 'D1'
   }
   const response = await request(server).post('/knight').send(params);

   expect(response.status).toEqual(200);
   expect(response.text).toContain('Ok');
 });

 test('when data is invalid', async () => {
   const params = {
     position: 'D15'
   }
   const response = await request(server).post('/knight').send(params);

   expect(response.status).toEqual(400);
   expect(response.text).toContain('Check your data');
 });
});
