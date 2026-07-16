import{Page,expect} from '@playwright/test'
import{ProductDisplaypage} from '../pages/ProductDisplayPage'

export class ProductDisplayflows {

    readonly pdp : ProductDisplaypage

    constructor(public readonly page:Page){
        this.pdp = new ProductDisplaypage(page)
    }

     async productDisplayClick(quantity : string)
    {
        await expect(this.page).toHaveURL(/product/)
        var pdisplay = await this.page.locator(".detail-copy")

        await expect(pdisplay.getByRole('heading',{name:/Metro Carryall/i, level:1})).toContainText('Metro Carryall')
        await expect(pdisplay.getByText('499')).toBeVisible()
        
        await this.pdp.productDisplay(quantity)

    
    }


}