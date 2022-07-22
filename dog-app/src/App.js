import './App.css';
import React, { useState } from 'react';
import RandomDogForm from './components/RandomDogForm';

function App() {
  const [dogImage, setDogImage] = useState({});

  // Only used for checking if the state has changed.
  React.useEffect(()=> {
    console.log("dogImage changed in the app component.")
    console.log(dogImage);
  }, [dogImage]);

  return (
    <div className="App">
      <h1>Dog App</h1>
      <RandomDogForm setDogImage={setDogImage} />
      <img 
        src={dogImage} 
        alt="">
      </img>
    </div>
  );
}

export default App;
