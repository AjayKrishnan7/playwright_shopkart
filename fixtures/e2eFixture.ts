import {test as base} from '../evidence/artifact'
import {Loginflows} from '../flows/LoginFlows'
import {Catalogflows} from '../flows/CatalogFlows'
import {Productflows} from '../flows/ProductFlows'
import {ProductDisplayflows} from '../flows/ProductDisplayFlows'
import {Cartflows} from '../flows/CartFlows'
import {Checkoutflows} from '../flows/CheckoutFlows'
import {Ordersflows} from '../flows/OrdersFlows'


export const test =
base.extend
<{
    login : Loginflows
    catalog : Catalogflows
    product : Productflows
    productdisplay : ProductDisplayflows
    cart : Cartflows
    checkout : Checkoutflows
    order : Ordersflows
}>
({
    login : async ({page}, use)=>
    {
        await use(new Loginflows(page))
    },

     catalog : async ({page}, use)=>
    {
        await use(new Catalogflows(page))
    },

    product : async({page}, use)=>
    {
        await use(new Productflows(page))
    },

      productdisplay : async({page}, use)=>
    {
        await use(new ProductDisplayflows(page))
    },
    
     cart : async({page}, use)=>
    {
        await use(new Cartflows(page))
    },

     checkout : async({page}, use)=>
    {
        await use(new Checkoutflows(page))
    },

     order : async({page}, use)=>
    {
        await use(new Ordersflows(page))
    }

})
