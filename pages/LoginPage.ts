import {Page} from '@playwright/test'

export class LoginPage{

    constructor(public readonly page:Page){ }

    async login()
    {
        await this.page.goto("/login")
    }

    async loginFill(username:string, password:string)
    {
        await this.page.getByRole('textbox',{name:"Email"}).fill(username)
        await this.page.getByRole('textbox',{name:"Password"}).fill(password)

        var form = await this.page.getByRole('form')
        await form.getByRole('button', {name:"Sign in "}).click()
    }

}