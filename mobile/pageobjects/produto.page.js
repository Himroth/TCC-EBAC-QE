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

    get #campoProcurar() {
        return $('id:com.woocommerce.android:id/menu_search')
    }

    async esperaOProcurar() {
        await this.#campoProcurar.waitForExist()
        return this.#campoProcurar.isDisplayed()
    }

    async clicaCampoProcurar() {
        await this.#campoProcurar.click()
    }

    get #campoInsereTexto() {
        return $('id:com.woocommerce.android:id/search_src_text')
    }

    async esperaCampoInsereTexto() {
        await this.#campoInsereTexto.waitForExist()
        return this.#campoInsereTexto.isDisplayed()
    }

    async preencheCampoInsereTexto() {
        await this.#campoInsereTexto.setValue('Abominable Hoodie')
    }

    get #campoSort() {
        return $('id:com.woocommerce.android:id/btn_product_sorting')
    }

    async waitCampoSorte() {
        await this.#campoSort.waitForExist()
        return await this.#campoSort.isDisplayed()
    } 

    get #campoProduto() {
        return $('id:com.woocommerce.android:id/productName')
    }

    async waitProdutoNome() {
        await this.#campoProduto.waitForExist()
        return await this.#campoProduto.getText()
    }

    async clickOnProduct() {
        await this.#campoProduto.click()
        
    }

    get #botaoVariations() {
        return $('(//android.widget.ImageView[@content-desc="Edit product"])[3]')
    }

    async esperaBotaoVariations() {
        await this.#botaoVariations.waitForExist()
        return await this.#botaoVariations.isDisplayed()
    }

    async clicaBotaVariations() {
        await this.#botaoVariations.click()
    }

    get #botaoGerar() {
        return $('id:com.woocommerce.android:id/addVariationButton')
    }

    async esperaBotaoGerar() {
        await this.#botaoGerar.waitForExist()
        return await this.#botaoGerar.isDisplayed()
    }

    async clicaBotaoGerar() {
        await this.#botaoGerar.click()
    }

    get #msgFaltaPreco() {
        return $('id:com.woocommerce.android:id/warning_message')
    }

    async esperaMsgPreco() {
        await this.#msgFaltaPreco.waitForExist()
        return await this.#msgFaltaPreco.getText()
    }

}

module.exports = new produtoPage()