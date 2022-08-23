const chai = require('chai');
const chaiHttp = require('chai-http');
const data = require('../mock/chocolates.json');
const fs = require('fs');
const sinon = require('sinon');

chai.use(chaiHttp);

sinon.stub(fs.promises, 'readFile').resolves(data);
