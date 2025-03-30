'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var expect = chai.expect;
var request = chai.request;

var { MongoMemoryServer } = require('mongodb-memory-server');
var mongoose = require('mongoose');
var app = require('../../app');

var Fixtures = require('../fixtures/fixtures');
var UserFixture = Fixtures.UserFixture;

var baseUri = '/users';
var testData = { existingUser: {}, modifiedUser: {} };

let mongoServer;

before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('UserController', function () {

    describe("POST " + baseUri, function () {
        it('should add new user', function (done) {
            request(app)
                .post(baseUri)
                .send(UserFixture.newUser)
                .end(function (err, res) {
                    expect(res.status).to.equal(201);
                    expect(res.body).to.not.be.empty;
                    expect(res.body._id).to.exist;
                    expect(res.body.firstName).to.equal(UserFixture.createdUser.firstName);
                    testData.existingUser = res.body;
                    done();
                });
        });
    });

    describe("GET " + baseUri, function () {
        it('should get all users', function (done) {
            request(app)
                .get(baseUri)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('array').that.is.not.empty;
                    testData.existingUser = res.body[0];
                    done();
                });
        });
    });

    describe('GET ' + baseUri + '/:userId', function () {
        it('should get a user by id', function (done) {
            request(app)
                .get(baseUri + '/' + testData.existingUser._id)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.deep.equal(testData.existingUser);
                    done();
                });
        });
    });
    
    describe('PUT ' + baseUri + '/:userId', function () {
        it('should modify existing user', function (done) {
            testData.modifiedUser = { ...UserFixture.modifiedUser, _id: testData.existingUser._id };
            request(app)
                .put(baseUri + '/' + testData.modifiedUser._id)
                .send(testData.modifiedUser)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body.firstName).to.equal(testData.modifiedUser.firstName);
                    done();
                });
        });
    });

    describe('DELETE ' + baseUri + '/:userId', function () {
        it('should remove an existing user', function (done) {
            request(app)
                .delete(baseUri + '/' + testData.existingUser._id)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body.message).to.equal('User deleted successfully'); // Ajustar según la API
                    done();
                });
        });
    });

});