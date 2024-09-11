import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import EventButton from './EventButton';
import NameList from './NameList';
import SimpleForm from './SimpleForm';

function App() {
  return (
    <div>
      <h1>Welcome to Your React App!</h1>
      <Greeting name="Zayan" />
      <Counter />
      <EventButton />
      <NameList />
      <SimpleForm />
      <p>This is Day 5 of your learning.</p>
    </div>
  );
}

export default App;
