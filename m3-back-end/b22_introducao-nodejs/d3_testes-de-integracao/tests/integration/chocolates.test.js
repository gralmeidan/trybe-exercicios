const chai = require('chai');
const chaiHttp = require('chai-http');
const data = require('../mock/chocolates.json');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

sinon.stub(fs.promises, 'readFile').resolves(data);

describe('Testa o método GET em /chocolates/total', () => {
  it('Deve retornar o total de chocolates com o status 200', async () => {
    const response = await chai.request(app).get('/chocolates/total');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      totalChocolates: data.chocolates.length,
    });
  });
});
