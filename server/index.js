const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();


app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", function(req, res) {
    const html = path.resolve(__dirname, '..', 'src/index.html')
    res.sendFile(html)
});


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
