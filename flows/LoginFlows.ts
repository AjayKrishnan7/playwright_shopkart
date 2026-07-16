import {Page, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

export class Loginflows
{
    readonly lp : LoginPage

    constructor(public readonly page:Page){
        this.lp=new LoginPage(page)
     }
    
    async userLogin(username:string, password:string)
    {
        await this.lp.login()
        await expect(this.page).toHaveURL("/login")
        await expect(this.page.getByRole('heading',{name:/Sign in/i, level:1})).toContainText('Sign in')

        await this.lp.loginFill(username,password);
        await expect(this.page).toHaveURL("/")
    }

}