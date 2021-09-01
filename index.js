const express = require("express")
const app = express()

const port = 80;
app.use('/cdn/', express.static('cdn'));
app.set('view-engine', 'pug')
app.get('/', (req, res) => res.render("index.ejs"));

app.listen(port, () => console.log(`Server started on port ${port}`))