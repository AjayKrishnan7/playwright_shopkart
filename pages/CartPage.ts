import {Page} from '@playwright/test'

export class Cartpage {

    constructor(public readonly page:Page){ }

    async checkout()
    {
       await this.page.getByRole('button', {name:'Checkout'}).click()
    }

}