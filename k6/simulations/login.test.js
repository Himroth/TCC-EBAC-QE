import { group } from 'k6';
import Login from 'k6/requests/login.request.js'
import data from 'k6/data/usuarios.json'



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
    
    let login = new Login()
   

    group('login and get token', () => {
        login.access(data.user.user, data.user.pass)

    })

}