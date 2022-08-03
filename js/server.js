const express = require('express')
const cors = require('cors')
const { Client } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())

const db = new Client({
    host: process.env.DB_HOST,
    port: 5432,
    user: 'postgres',
    password: process.env.DB_PASS,
    database: 'main',
})
db.connect()

app.post('/', function (req, res) {
    db.query(`SELECT * FROM "products" WHERE TRUE AND "products"."updated" > '2022-08-03 17:33:46' AND "products"."sex" = 'male' ORDER BY "index" ASC LIMIT  52 OFFSET 0`, (error, data) => {
        if (data.rows.length) {
            db.query(`SELECT COUNT(*) FROM "products" WHERE TRUE AND "products"."updated" > '2022-08-03 17:33:46' AND "products"."sex" = 'male'`, (error, data) => {
                res.json(data.rows[0])
            })
        } else {
            res.json({'data': 'error'})
        }
    })
})

app.listen(3000)
