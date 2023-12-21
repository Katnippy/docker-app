import { useState } from 'react';

import Entry from './components/Entry.jsx';

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
      <Entry entry={{ identifier: 'Name', info: profile.name }} />
      <Entry entry={{ identifier: 'Email', info: profile.email }} />
      <Entry entry={
        { identifier: 'Favourite penguin', info: profile.favSpecies }
      } />
      <button type="button" onClick={() => handleEditOrSaveChange()}>
        {editOrSave === 'edit' ? 'Edit profile' : 'Save profile'}
      </button>
    </div>
  );
}

export default App
