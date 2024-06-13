require('dotenv').config()
const express =  require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send("<h1>Hello  World</h1>")
})

app.get('/twitter', (req, res) => {
    res.send("<h1>Twitter</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${port}`);
})