const ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const RandomDogAPI = function(options){
  this.source = "";
  if(options){
    Object.assign(this,options);
  }
}

RandomDogAPI.prototype.getRandomDog = function(){
  return fetch(`${ENDPOINT}`)
    .then((response) => response.json())
    .then((currentDog) =>{
      const imgSource = `${currentDog.message}`;
      return imgSource;
    });
}

export {RandomDogAPI};