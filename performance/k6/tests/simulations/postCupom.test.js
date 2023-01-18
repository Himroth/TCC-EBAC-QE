import { group } from 'k6';
import postCupom from "../requests/postCupom.request"
import criaCupom from "../data/criaCupom.json"


export const options = {
    stages: [
        { duration: '15s', target: 10 },
        { duration: '10s', target: 50 },
        { duration: '15s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(99) < 1000']
    }
} 

export default function () {

    let cupom = new postCupom()

    group('criar cupom', () => {
        cupom.postCupom(criaCupom.code, criaCupom.amount, criaCupom.discount_type, criaCupom.description)
    })
}