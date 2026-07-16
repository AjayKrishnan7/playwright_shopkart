import {test} from '../fixtures/e2eFixture'
import {environment} from '../config/environment'

test.describe("SHOPKART", ()=>{

    test("END TO END", async({login,catalog,product,productdisplay,cart,checkout,order,log,evidence})=>{

        log.info("User Trying to Login")
        await login.userLogin(environment.username, environment.password)
        

        log.info("User searches for a product")
        await catalog.searchFor("ca")

        log.info("User clicks on the product and goes to PDP")
        await product.productClick()

        log.info("User adds quantity and add product to cart")
        await productdisplay.productDisplayClick("3")
        
        log.info("User checkouts the added items in cart")
        await cart.cartItem()

        log.info("User places the order")
        await checkout.cartItem("Trivandrum,kazhakootam")

         log.info("User Order gets CONFIRMED")
         await order.orderCompleted()
       
    })

})  