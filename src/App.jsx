import { useState } from 'react';

import Entry from './components/Entry.jsx';
import EntryForm from './components/EntryForm.jsx';

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

  function handleNameChange(event) {
    const newProfile = { ...profile, name: event.target.value };
    setProfile(newProfile);
  }

  function handleEmailChange(event) {
    const newProfile = { ...profile, email: event.target.value };
    setProfile(newProfile);
  }

  function handleFavSpeciesChange(event) {
    const newProfile = { ...profile, favSpecies: event.target.value };
    setProfile(newProfile);
  }

  return (
    <div className="container">
      <h1>User Profile</h1>
      {editOrSave === 'edit' 
        ? <Entry entry={{ identifier: 'Name', info: profile.name }} />
        : <EntryForm id="email" onChange={handleNameChange} entry={
          { identifier: 'Name', info: profile.name }
        } />}
      {editOrSave === 'edit' 
        ? <Entry entry={{ identifier: 'Email', info: profile.email }} />
        : <EntryForm id="email" onChange={handleEmailChange} entry={
            { identifier: 'Email', info: profile.email }
          } />}
      {editOrSave === 'edit' 
        ? <Entry entry={
            { identifier: 'Favourite penguin', info: profile.favSpecies }
          } />
          : <EntryForm id="email" onChange={handleFavSpeciesChange} entry={
            { identifier: 'Favourite penguin', info: profile.favSpecies }
          } />}
      <button type="button" onClick={() => handleEditOrSaveChange()}>
        {editOrSave === 'edit' ? 'Edit profile' : 'Save profile'}
      </button>
    </div>
  );
}

export default App
