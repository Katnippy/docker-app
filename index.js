import express from 'express';

let profile = {
  name: 'Me',
  email: 'ilove@penguins.com',
  favSpecies: 'Africans and Emperors',
};

const app = express();

app.get('/api/profile', (req, res) => res.json(profile));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
