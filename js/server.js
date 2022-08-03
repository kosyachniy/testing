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
    db.query(process.env.SQL1, (error, data) => {
        if (data.rows.length) {
            db.query(process.env.SQL2, (error, data) => {
                res.json(data.rows[0])
            })
        } else {
            res.json({'data': 'error'})
        }
    })
})

app.listen(3000)
