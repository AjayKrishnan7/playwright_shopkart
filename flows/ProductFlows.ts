import {expect,Page} from '@playwright/test'
import {Productpage} from '../pages/ProductPage'

export class Productflows
{
    readonly pg : Productpage

    constructor(public readonly page:Page){
            this.pg=new Productpage(page)
         }

     async productClick()
    {
        await expect(this.page).toHaveURL("/")
        await expect(this.page.getByRole('heading',{name:/Useful things/i, level:1})).toContainText('Useful things')
        var product = await this.page.getByRole('article').filter({hasText : 'Metro Carryall'})
        await expect(product.getByText('499')).toBeVisible()

        await this.pg.product()
    }

}