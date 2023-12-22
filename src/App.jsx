import { useState } from 'react';

import Field from './components/Field.jsx';
import FieldForm from './components/FieldForm.jsx';

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
        ? <Field field={{ identifier: 'Name', info: profile.name }} />
        : <FieldForm id="email" onChange={handleNameChange} field={
          { identifier: 'Name', info: profile.name }
        } />}
      {editOrSave === 'edit' 
        ? <Field field={{ identifier: 'Email', info: profile.email }} />
        : <FieldForm id="email" onChange={handleEmailChange} field={
            { identifier: 'Email', info: profile.email }
          } />}
      {editOrSave === 'edit' 
        ? <Field field={
            { identifier: 'Favourite penguin', info: profile.favSpecies }
          } />
          : <FieldForm id="email" onChange={handleFavSpeciesChange} field={
            { identifier: 'Favourite penguin', info: profile.favSpecies }
          } />}
      <button type="button" onClick={() => handleEditOrSaveChange()}>
        {editOrSave === 'edit' ? 'Edit profile' : 'Save profile'}
      </button>
    </div>
  );
}

export default App
