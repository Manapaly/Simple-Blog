const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 8008

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})