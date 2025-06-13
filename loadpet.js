const pets = [
  {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"},
  {"name": "Sam", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg"},
  {"name": "Bob", "type": "Dog", "age": 1, "img": "img/dogs/dog03.jpg"},
  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"},
  {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg"},
  {"name": "Kitty", "type": "Cat", "age": 1, "img": "img/cats/cat03.jpg"},
  {"name": "Bobo", "type": "capybara", "age": 4, "img": "img/capybaras/capybara01.jpg"},
  {"name": "Moo", "type": "capybara", "age": 1, "img": "img/capybaras/capybara02.jpg"},
  {"name": "Timpy", "type": "Bird", "age": 7, "img": "img/birds/bird01.jpg"},
  {"name": "Simpy", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg"},
]


function loadPets() {
  const petList = document.getElementById('pet-list');
  pets.forEach(pet => {
    const petItem = document.createElement('div');
    petItem.className = 'pet';
    petItem.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button onclick="adoptPet()">Adopt Now</button>
  `;
    petList.appendChild(petItem);
  });
}
document.addEventListener('DOMContentLoaded', loadPets);
