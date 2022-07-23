import './App.css';
import React, { useState } from 'react';
import RandomDogForm from './components/RandomDogForm';

function App() {
  const [dog, setDog] = useState({});

  // Only used for checking if the state has changed.
  React.useEffect(()=> {
    console.log("dog changed in the app component.")
    console.log(dog);
  }, [dog]);

  return (
    <div className="App">
      <h1>Dog App</h1>
      <RandomDogForm setDog={setDog} />
      <h4>My breed is {dog.breedName}</h4>
      <img 
        src={dog.url} 
        alt={dog.breedName}>
      </img>
    </div>
  );
}

export default App;
