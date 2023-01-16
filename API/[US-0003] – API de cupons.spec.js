const request = require('supertest');

describe('API de cupons', () => {
    it('Realizando um GET de cupons', () => {
        request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .get('/coupons')
            .set('Accept', 'application/json')
            .set("Authorization", 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .then(response => {
                expect(response.status).toEqual(200)
            })
    });

    it('Realizando POST de cupom já existente', () => {
        request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .post('/coupons')
            .send({
                "code": "nomeCupom",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste",
            })
            .set('Accept', 'application/json')
            .set("Authorization", 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy')
            .then(response=> {
                expect(response.body.data.status).toEqual(400)
                expect(response.body.message).toEqual('O código de cupom já existe')
            })
    });


});