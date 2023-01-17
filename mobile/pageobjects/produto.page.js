class produtoPage {
    get #buttonProduct() { 
        return $('id:com.woocommerce.android:id/products')
    }

    async tapButtonProduct() {
        await this.#buttonProduct.click()
    }

    get #productTitleToolbar() {
        return $('id:collapsing_toolbar')
    }

    get #nameProductPage() {
        return $('~Products')
    }

    async getProductNamePageToolbar() {
        return await this.#productTitleToolbar.getAttribute('content-desc')
    }

    async namePageProduct() {
        await this.#nameProductPage.waitForExist()
        return await this.#nameProductPage.isDisplayed()
    }


}

module.exports = new produtoPage()