const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');

const app= express();
const port= 3000;

app.use(express.static(path.join(__dirname,'NOSC-website')));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/submit-feedback', (req,res)=> {
    const event = req.body.event;
    const rating = req.body.rating;
    const likedMost = req.body['liked-most'];
    const suggestion = req.body.suggestions;

    res.redirect('/thank-you.html');

})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})