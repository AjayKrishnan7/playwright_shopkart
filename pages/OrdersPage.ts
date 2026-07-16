import {Page} from '@playwright/test'

export class Orderspage {

    constructor(public readonly page:Page){ }

    async return()
    {
       await this.page.getByRole('button', {name:'Return to catalog'})   
    }

}