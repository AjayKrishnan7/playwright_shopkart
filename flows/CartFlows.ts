import {expect,Page} from '@playwright/test'
import {Cartpage} from '../pages/CartPage'

export class Cartflows
{
    readonly cartp : Cartpage 

    constructor(public readonly page:Page)
    {
        this.cartp=new Cartpage(page)
    }

    async cartItem()
    {
        await expect(this.page).toHaveURL("/cart")
        await expect(this.page.getByRole('heading', {name:"Your cart", level:1})).toBeVisible()
        await expect(this.page.getByRole('cell',{name:"Metro Carryall"})).toBeVisible()

        await this.cartp.checkout()
    }


}