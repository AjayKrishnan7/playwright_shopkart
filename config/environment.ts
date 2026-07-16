import dotenv from 'dotenv'
dotenv.config();

export class environment{

    static readonly username =  process.env.USER_NAME!
    static readonly password = process.env.PASS_WORD!

}