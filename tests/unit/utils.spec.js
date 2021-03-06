'use strict';

const utils = require('../../lib/utils');
const expect = require('expect.js');

describe('utils', function () {
  describe('endsWith', function () {
    it('should ends with', function (done) {
      let endsWith = utils.endsWith('test', '.jpg');
      expect(endsWith).to.eql(false);
      done();
    });
    it('should not ends with', function (done) {
      let endsWith = utils.endsWith('test.jpg', '.jpg');
      expect(endsWith).to.eql(true);
      done();
    });
  });

  describe('validate', function () {
    it('should be valid', function (done) {
      let validate = utils.validate('www.test.com', 2000);
      expect(validate.returnInputUrl).to.eql('http://www.test.com');
      expect(validate.returnInputTimeout).to.eql(2000);
      done();
    });
    it('should also be valid', function (done) {
      let validate = utils.validate('http://www.test.com', 2000);
      expect(validate.returnInputUrl).to.eql('http://www.test.com');
      expect(validate.returnInputTimeout).to.eql(2000);
      done();
    });
    it('should be not valid', function (done) {
      let validate = utils.validate('http://www.test.com', 'asda');
      expect(validate.returnInputUrl).to.eql('http://www.test.com');
      expect(validate.returnInputTimeout).to.eql(2000);
      done();
    });
    it('should be not valid', function (done) {
      let validate = utils.validate('', 2000);
      expect(validate.returnInputUrl).to.eql(null);
      expect(validate.returnInputTimeout).to.eql(2000);
      done();
    });
  });
});
