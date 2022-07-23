import {RandomDogAPI} from '../api/RandomDogAPI.js';
import { DogAPI } from '../api/DogAPI.js';
import Button from '@mui/material/Button';

const DogRandomForm = function(props){
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    // Recently used random dog API.
    // let randomDogAPI = new RandomDogAPI();
    let dogAPI = new DogAPI();
    // randomDogAPI.getRandomDog()
    //   .then((currentDog) =>{
    //     props.setDogImage(currentDog);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    dogAPI.getRandomDog()
      .then((currentDog) => {
        if(currentDog.dogData){
          props.setDog(currentDog.dogData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <Button type="submit" variant="contained">Get Doggo</Button>
      </form>
    </div>
  );
}

export default DogRandomForm;