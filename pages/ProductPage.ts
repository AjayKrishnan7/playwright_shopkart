import {Page} from '@playwright/test'

export class Productpage {

    constructor(public readonly page:Page){ }

    async product()
    {
       await this.page.getByRole('button', {name:'Open Metro'}).click()
    }

}