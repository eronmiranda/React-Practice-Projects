import { DogAPI } from '../api/DogAPI.js';
import Button from '@mui/material/Button';

const DogRandomForm = function(props){
  const onSubmitHandler = (event) =>{
    event.preventDefault();

    let dogAPI = new DogAPI();

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