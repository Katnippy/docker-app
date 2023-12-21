import { useState } from 'react';

function App() {
  const [profile, setProfile] = useState(
    {
      name: 'Me',
      email: 'ilove@penguins.com',
      favSpecies: 'Africans and Emperors',
    }
  );
  const [editOrSave, setEditOrSave] = useState('edit');

  const handleEditOrSaveChange = () => {
    if (editOrSave === 'edit') {
      setEditOrSave('save');
    } else {
      setEditOrSave('edit');
    }
  };

  return (
    <div className="container">
      <h1>User Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Favourite penguin species: {profile.favSpecies}</p>
      <button type="button" onClick={() => handleEditOrSaveChange()}>
        {editOrSave === 'edit' ? 'Edit profile' : 'Save profile'}
      </button>
    </div>
  );
}

export default App
