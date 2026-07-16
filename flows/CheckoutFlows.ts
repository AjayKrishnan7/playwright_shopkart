import {expect,Page} from '@playwright/test'
import {Checkoutpage} from '../pages/CheckoutPage'

export class Checkoutflows
{
    readonly checkp : Checkoutpage 

    constructor(public readonly page:Page)
    {
        this.checkp=new Checkoutpage(page)
    }

    async cartItem(addrress : string)
    {
        await expect(this.page).toHaveURL("/checkout")
        await expect(this.page.getByRole('heading', {name:"Checkout", level:1})).toBeVisible()

        await this.checkp.placeorder(addrress)
    }


}