let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
 
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', toyList)
function toyList(){
  fetch('http://localhost:3000/toys')

  .then((resp) => resp.json())
  .then((data) => {
    console.log(data)
    data.forEach(toys)
  
  })
}
function toys(toy){
  const toyProfiles=document.getElementById('toy-collection');
  const toyProfile = document.createElement('div')
  toyProfile.classList.add('card')
  toyProfile.innerHTML = `<h2>${toy.name}</h2>
  <img src= '${toy.image}' alt='${toy.name}' class='toy-avatar'> 
  <p>${toy.likes}</p>

  <button value ='like' class='like-btn' id=${toy.id}>Like</button>`;
  toyProfiles.append(toyProfile);
console.log(toy.name,toy.image)
}
// "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist"
function addToyInFile(){
  fetch('http://localhost:3000/toys',{
    method: 'POST',
    body:JSON.stringify({
      "name": name.name,
      "image": name.image,
      "likes": 0
      
    }),
headers:{
  "Content-type":'application/json;charset = UTF-8',
  Accept: "application/json"}
  })
  .then((resp) => resp.json())
  .then(json => console.log(json))
}

// ,{
//   method:'POST',
//   headers:{
//     "Content-Type":"application/json",
//     Accept: "application/json"
//   },  
//   body: JSON.stringify({
   
//   })
//   }