//import 'dotenv/config'
import { config } from 'dotenv'

config( { path: "../.env" } )

let str: String = process.env.TEST_ENV
console.log(str)
