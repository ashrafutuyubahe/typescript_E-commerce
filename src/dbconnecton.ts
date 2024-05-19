
import {Pool}  from 'pg'

const  dbconnnection= new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Gymfit',
    password:'123',
    port: 5432

})

export  default dbconnnection;