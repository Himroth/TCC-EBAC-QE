const request = require('supertest');
const authorization = require('../API/Utils/apiAcess.json')

describe('API de cupons', () => {

    it('Realizando um GET de cupons', () => {
        request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .get('/coupons')
            .set('Accept', 'application/json')
            .set("Authorization", JSON.stringify(authorization))
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
            .set("Authorization", JSON.stringify(authorization))
            .then(response=> {
                //expect(response.body.data.status).toEqual(400)
                expect(response.status).toEqual(400)
                expect(response.body.message).toEqual('O código de cupom já existe')
            })
    });


});