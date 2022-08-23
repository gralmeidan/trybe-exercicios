const chai = require('chai');
const chaiHttp = require('chai-http');
const data = require('../mock/chocolates.json');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(data));

describe('Testa o método GET em /chocolates/total', () => {
  it('Deve retornar o total de chocolates com o status 200', async () => {
    const response = await chai.request(app).get('/chocolates/total');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      totalChocolates: data.chocolates.length,
    });
  });
});

describe('Testa o método GET em /chocolates/search', () => {
  it('Deve retornar os chocolates com o termo pesquisado', async () => {
    const response = await chai.request(app).get('/chocolates/search?name=Mo');
    const output = [
      {
        id: 3,
        name: 'Mon Chéri',
        brandId: 2,
      },
      {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      },
    ];

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Deve retornar status code 404 quando não encontrar nada', async () => {
    const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal([]);
  });
});

describe('Testa o método PUT do endpoing /chocolates/:id', async () => {
  const reqBody = {
    name: 'Mint Pretty God',
    brandId: 2,
  };

  it('Deve atualizar o array de chocolates', async () => {
    const response = await chai.request(app).put('/chocolates/1').send(reqBody);
    const output = {
      chocolate: {
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      },
    };

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(output);
  });

  it('Deve retornar o status code 404 caso o id não exista', async () => {
    const response = await chai.request(app).put('/chocolates/9').send(reqBody);
    const output = {
      message: 'chocolate not found',
    };

    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal(output);
  });
});
