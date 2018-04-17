'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
  .get('/groot?message=')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
    "received": "",
    "translated": "I am Groot!"
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('groot endpoint', (t) => {
  request(app)
  .get('/groot')
  .expect(400)
  .expect('Content-Type', /json/)
  .expect({
    'error': 'I am Groot!',
  })
  .end((err,res) => {
    t.error(err);
    t.end();
  });
});

test('yonda endpoint', (t) => {
  request(app)
  .get('/yonda?distance=100&time=10')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({
    distance: '100',
    time: '10',
    speed: '10'
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});

test('yonda endpoint', (t) => {
  request(app)
  .get('/yonda')
  .expect(400)
  .expect('Content-Type', /json/)
  .expect({
    error: 'error'
  })
  .end((err, res) => {
    t.error(err);
    t.end();
  });
});