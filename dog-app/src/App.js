import './App.css';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import RandomDogForm from './components/RandomDogForm';
import { CardContent } from '@mui/material';

function App() {
  const [dog, setDog] = useState({});

  return (
    <Container maxwidth="sm">
      <h1>Dog Randomizer App</h1>
      <RandomDogForm setDog={setDog} />
      <Card>
        <CardContent>
          <p><strong>My breed is</strong> {dog.breedName}</p>
          <p><strong>Bred for:</strong> {dog.bredFor}</p>
          <p><strong>Breed group:</strong> {dog.breedGroup}</p>
          <p><strong>Life Span:</strong> {dog.lifeSpan}</p>
          <p><strong>Temperament:</strong> {dog.temperament}</p>
          <img 
            src={dog.url} 
            alt={dog.breedName}
            className="ResponsiveImage">
          </img>
        </CardContent>
      </Card>
    </Container>
    
  );
}

export default App;
