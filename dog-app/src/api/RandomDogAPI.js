const ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const DogAPI = function(options){
  this.source = "";
  if(options){
    Object.assign(this,options);
  }
}

DogAPI.prototype.getRandomDog = function(){
  return fetch(`${ENDPOINT}`)
    .then((response) => response.json())
    .then((currentDog) =>{
      const imgSource = `${currentDog.message}`;
      return imgSource;
    });
}

export {DogAPI};