export default class Utils {
    static getBaseUrl() {
        switch (process.env.NODE_ENV) {
            case 'development':
                return `http://lojaebac.ebaconline.art.br/wp-json/wc/v3`
            case 'production':
                return `http://lojaebac.ebaconline.art.br/wp-json/wc/v3`
        }
    }
}