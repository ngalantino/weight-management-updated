const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Express to use Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Serve static assets from the public folder
app.use(express.static('public'));

// Define a route to render your home template
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        heading: 'Hello World!'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
