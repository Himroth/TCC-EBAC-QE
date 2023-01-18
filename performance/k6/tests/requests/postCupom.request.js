
import { check } from "k6"
import http from "k6/http"
import utils from "../utils/baseUrl"
import apiAcess from "../data/apiAcess.json"

export default class postCupom {
    postCupom(code, amount, discount_type, description) {
        let response = http.post(`${utils.getBaseUrl()}/coupons`, JSON.stringify(
            {
                "code": code,
                "amount": amount,
                "discount_type": discount_type,
                "phone": phone,
                "description": description
            }
        ),
        {
            headers: {
                Authorization: JSON.stringify(apiAcess),
                "Accept": "application/json"

            }
        }
        )
        check(response, { 'Post deve retornar status 200': r => r && r.status === 200})
    }
}