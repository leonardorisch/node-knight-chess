const KnightService = require('../knight/KnightService');
const supertest = require('supertest');
const app = require('../server.js');

describe('identifyAvailableMovements', () => {
 test('calculate right available movements based on chess table boundaries', () => {
   const service = new KnightService();
   const response = JSON.parse(service.identifyAvailableMovements('A1'))['firstMovements'];
   expect(response[0]).toEqual(
     {
       position: 'C2',
       x: 3,
       y: 2,
     }
   )
   expect(response[1]).toEqual(
     {
       position: 'B3',
       x: 2,
       y: 3,
     }
   )
 });
});

describe('check boundaries', () => {
 test('when must return the object', () => {
   const params = {
     x: 4,
     y: 2,
     position: 'D1'
   }
   const service = new KnightService();
   expect(service.checkBoundaries(params['x'], params['y'], params['position'])).toEqual({
     x: 4,
     y: 2,
     position: 'D2'
   })
 });

 test('when position is the same must not return object', () => {
   const params = {
     x: 4,
     y: 2,
     position: 'D2'
   }
   const service = new KnightService();
   expect(service.checkBoundaries(params['x'], params['y'], params['position'])).toBeUndefined();
 });
});

describe('generate position', () => {
 test('transform two indexes to a new string', () => {
   const params = {
     x: 4,
     y: 2
   }
   const service = new KnightService();
   expect(service.generatePosition(params['x'], params['y'])).toEqual('D2')
 });
});

describe('unMount position', () => {
 test('transform a string to two indexes', () => {
   const params = {
     x: 4,
     y: 2
   }
   const service = new KnightService();
   expect(service.unMountPosition('D2')).toEqual(params)
 });
});

describe('moves', () => {
 test('return array of available moves before validate', () => {
   const x     = 4;
   const y     = 2;
   const stepX = 1;
   const stepY = 2;
   const service = new KnightService();
   expect(service.moves(x, y, stepX, stepY)).toEqual([
     [x + stepX, y - stepY],
     [x + stepX, y + stepY],
     [x - stepX, y - stepY],
     [x - stepX, y + stepY],
   ])
 });
});
