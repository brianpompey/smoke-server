const express = require('express');
const mongoose = require('mongoose');

const Recipe = mongoose.model('Recipe');

const router = express.Router();

// router.use(requireAuth);

router.get('/recipes', async (req, res) => {
  const recipes = await Recipe.all;

  res.send(recipes);
});

router.post('/recipes', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(422)
      .send({ error: 'You must provide a title and content' });
  }

  try {
    const recipe = new Recipe({ title, content });
    await recipe.save();
    res.send(recipe);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;