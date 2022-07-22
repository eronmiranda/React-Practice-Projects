import {DogAPI} from '../api/RandomDogAPI.js';

const DogRandomForm = function(props){
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    // implement code here.
    let dogAPI = new DogAPI();

    dogAPI.getRandomDog()
      .then((currentDog) =>{
        props.setDogImage(currentDog);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <button type="submit">Get Doggo</button>
      </form>
    </div>
  );
}

export default DogRandomForm;