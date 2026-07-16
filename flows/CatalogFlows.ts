import {expect,Page} from '@playwright/test'
import {Catalogpage} from '../pages/CatalogPage'

export class Catalogflows
{
    readonly cp : Catalogpage 

    constructor(public readonly page:Page)
    {
        this.cp=new Catalogpage(page)
    }

    async searchFor(query:string)
    {
        await expect(this.page).toHaveURL("/")
        this.cp.search(query)
        await expect(this.page).toHaveURL("/")
    }


}