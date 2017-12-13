var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var chould = chai.should();

chai.use(chaiHttp);

describe('Hello', function () {
    it('should GET /api/v1/hello correctly', function (done) {
        chai.request(server)
            .get('/api/v1/hello')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.an('array');
                // res.body
                done();
            });
    });

    it('should handle /api/v1/hello/error correctly', function (done) {
        chai.request(server)
            .get('/api/v1/hello/error')
            .end(function (err, res) {
                res.should.have.status(500);
                res.should.be.json;
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.equal('HIER TREEDT EEN ERROR OP');
                // res.body
                done();
            });
    });
});