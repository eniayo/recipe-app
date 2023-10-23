const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const recipes = require('./recipes');

app.get('/', (req, res) => {
  res.render('index', { recipes });
});

app.get('/recipe/:id', (req, res) => {
  const id = req.params.id;
  const recipe = recipes.find(recipe => recipe.id === id);
  res.render('recipe', { recipe });
});

app.get('/add', (req, res) => {
  res.render('addRecipe');
});

app.post('/add', (req, res) => {
  const { title, ingredients, instructions } = req.body;
  const id = Date.now().toString();
  const newRecipe = { id, title, ingredients, instructions };
  recipes.push(newRecipe);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

