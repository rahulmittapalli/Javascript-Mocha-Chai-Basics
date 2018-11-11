var expect = require('chai').expect;
var env = require('./environment');
var https = require('https');
var assert = require('assert');
var request = require('request');


var options = {
  'rejectUnauthorized': false,
  url: env.hostname + env.APIver + '/open/products/1',
  headers: {
    'API-KEY': 'f960530a-ba6f-463c-8f00-46e2071490f7',
  }
}
//console.log(options);
describe('Sample products', function() {
  it('Hello world', function(done) {
    this.timeout(25000);
    request.get(options, function(res, err, body) {
      body = JSON.parse(body);
      console.log(body);
      done();
    });
  })
})
