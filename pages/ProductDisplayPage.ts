import {Page} from '@playwright/test'

export class ProductDisplaypage {

    constructor(public readonly page:Page){ }

    async productDisplay(quantity : string)
    {
        await this.page.getByRole('spinbutton', {name:'Quantity'}).fill(quantity)
        await this.page.getByRole('button', {name:'Add to cart'}).click()
    }

}