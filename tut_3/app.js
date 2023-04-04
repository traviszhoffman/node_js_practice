const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

//register view egine
app.set('view engine', 'ejs');
//if need to set a file to different place
//app.set('views', 'myviews');


//listen for requests
app.listen(3000);
//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs});
    //res.sendFile('./views/index.html', { root: __dirname});
    //res.send('<p>home page</p>');
})

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    //res.sendFile('./views/about.html', { root: __dirname});
    res.render('about', {title: 'About'})
})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

//404 page
//for middlewar applications
app.use( (req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', {title: '404'});
})