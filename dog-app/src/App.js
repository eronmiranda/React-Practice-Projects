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
      <h1>Dog Randomizer App</h1>
      <RandomDogForm setDog={setDog} />
      <h4><strong>My breed is</strong> {dog.breedName}</h4>
      <p><strong>Bred for:</strong> {dog.bredFor}</p>
      <p><strong>Breed group:</strong> {dog.breedGroup}</p>
      <p><strong>Life Span:</strong> {dog.lifeSpan}</p>
      <p><strong>Temperament:</strong> {dog.temperament}</p>
      <img 
        src={dog.url} 
        alt={dog.breedName}
        className="responsiveImage">
      </img>
    </div>
  );
}

export default App;
