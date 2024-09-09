import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import EventButton from './EventButton';
import ConditionalDisplay from './ConditionalDisplay';

function App() {
  return (
    <div>
      <h1>Welcome to Your React App!</h1>
      <Greeting name="Zayan" />
      <Counter />
      <EventButton />
      <ConditionalDisplay />
      <p>This is Day 3 of React learning.</p>
    </div>
  );
}

export default App;
