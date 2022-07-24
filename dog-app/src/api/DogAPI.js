const API_KEY = "b1dee469-125b-4651-bb67-9aee7a237ad0 ";
const ENDPOINT = "https://api.thedogapi.com/v1/";

const DogAPI = function(options){
  this.dogData = {};
  this.breedList = [];
  if(options){
    Object.assign(this,options);
  }

  DogAPI.prototype.getRandomDog = () => {
    return fetch(`${ENDPOINT}images/search?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((currentDog) =>{
        let dogData = [];
        if(currentDog[0].breeds[0]){
          let breed = currentDog[0].breeds[0];

          dogData = {
            breedName: breed.name,
            bredFor: breed.bred_for,
            breedGroup: breed.breed_group,
            lifeSpan: breed.life_span,
            temperament: breed.temperament,
            height: {
              imperial: breed.height.imperial,
              metric: breed.height.metric
            },
            weight: {
              imperial: breed.weight.imperial,
              metric: breed.weight.metric
            }
          };
        }
        // Seperated this for data that dont have breed information.
        dogData.url = `${currentDog[0].url}`;
        
        return Object.assign(this.dogData,{dogData});
      });
  }

  DogAPI.prototype.getDogList = () => {
    return fetch(`${ENDPOINT}breeds?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((breedData) =>{
      let breedList = breedData.map((breedData)=> breedData.name);

      return Object.assign(this.breedList,{breedList});
    });
  }
}

export {DogAPI};