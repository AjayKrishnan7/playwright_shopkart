import {Page} from '@playwright/test'

export class Checkoutpage {

    constructor(public readonly page:Page){ }

    async placeorder(address : string)
    {
       await this.page.getByRole('textbox', {name:'Delivery address'}).fill(address)   
       await this.page.getByRole('button', {name:'Place order'}).click()   
    }

}