'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    Hacker = mongoose.model('Hacker');

var hacker;

describe('Hacker Model', function() {
  before(function(done) {
    hacker = new Hacker({
      provider: 'local',
      name: 'Fake Hacker',
      email: 'test@test.com',
      password: 'password'
    });

    // Clear hackers before testing
    Hacker.remove().exec();
    done();
  });

  afterEach(function(done) {
    Hacker.remove().exec();
    done();
  });

  it('should begin with no hackers', function(done) {
    Hacker.find({}, function(err, hackers) {
      hackers.should.have.length(0);
      done();
    });
  });

  it('should fail when saving a duplicate hacker', function(done) {
    hacker.save();
    var userDup = new Hacker(hacker);
    userDup.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail when saving without an email', function(done) {
    hacker.email = '';
    hacker.save(function(err) {
      should.exist(err);
      done();
    });
  });

  it("should authenticate hacker if password is valid", function() {
    hacker.authenticate('password').should.be.true;
  });

  it("should not authenticate hacker if password is invalid", function() {
    hacker.authenticate('blah').should.not.be.true;
  });

});
