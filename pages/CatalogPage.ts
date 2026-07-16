import {Page} from '@playwright/test'

export class Catalogpage {

    constructor(public readonly page:Page){ }

    async search(query:string)
    {
       var search=await this.page.getByRole('searchbox', {name:'Search'})
       search.clear()
       search.fill(query)
       search.press("Enter")
    
    }

}