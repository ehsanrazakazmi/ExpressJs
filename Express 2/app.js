import express from "express";

const app  = express();

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'khushamdeed',
        message: 'Hello from ejs',
        people: ['a1, b2, c3, d4'],
    });
})

app.listen(8000, () => console.log('Server started'));
