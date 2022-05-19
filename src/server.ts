import * as dotenv from 'dotenv'

dotenv.config({path: "../.env"})

let str: String = process.env.TEST_ENV
console.log(str)
