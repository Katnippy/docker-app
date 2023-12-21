import { useState } from 'react';

function App() {
  const [profile, setProfile] = useState(
    {
      name: 'Me',
      email: 'ilove@penguins.com',
      favSpecies: 'Africans and Emperors',
    }
  );

  return (
    <div className="container">
      <h1>User Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Favourite penguin species: {profile.favSpecies}</p>
      <button type="button">Edit profile</button>
    </div>
  );
}

export default App
