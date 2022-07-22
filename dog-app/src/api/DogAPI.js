const API_KEY = "b1dee469-125b-4651-bb67-9aee7a237ad0 ";
const ENDPOINT = "https://api.thedogapi.com/v1/";

const DogAPI = function(options){
  this.dogData = {};
  if(options){
    Object.assign(this,options);
  }

  DogAPI.prototype.getRandomDog = () => {
    return fetch(`${ENDPOINT}images/search?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((currentDog) =>{
        console.log(currentDog);
        let dogData = [];
        if(currentDog[0].breeds[0]){
          dogData = {
            url:`${currentDog[0].url}`,
            breedName: `${currentDog[0].breeds[0].name}`
          };
        }
        else{
          dogData = {
            url:`${currentDog[0].url}`
          };
        }
        
        return Object.assign(this.dogData,{dogData});
      });
  }
}

export {DogAPI};