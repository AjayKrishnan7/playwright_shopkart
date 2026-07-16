import {expect,Page} from '@playwright/test'
import {Orderspage} from '../pages/OrdersPage'

export class Ordersflows
{
    readonly op : Orderspage 

    constructor(public readonly page:Page)
    {
        this.op=new Orderspage(page)
    }

    async orderCompleted()
    {
        await expect(this.page).toHaveURL(/orders/)
        await expect(this.page.getByRole('heading', {name:"Order Confirmed  ", level:1})).toBeVisible()
        await expect(this.page.getByRole('definition').filter({hasText:"PLACED"}))

        await this.op.return()
    }


}