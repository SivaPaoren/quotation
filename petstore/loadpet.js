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
  {"name": "Simpy", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg"}
];

function adoptPet() {
  alert("Thank you for adopting a pet!");
}

function loadPets() {
  const petList = $('#pet-list');
  petList.empty(); // Clear the list first in case this is called again

  pets.forEach(pet => {
    const petItem = $('<div>').addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });

  // Handle click on adopt button
  petList.on("click", ".adopt-btn", adoptPet);

  // Handle pet-type filter changes
  $('input[name="pet-type"]').on("change", function () {
    filterPets();
  });
}

function filterPets() {
  const types = $('input[name="pet-type"]:checked')
    .map(function () {
      return $(this).val();
    })
    .get();

  const filteredPets = pets.filter(pet => types.includes(pet.type));
  const petList = $("#pet-list");
  petList.empty();

  filteredPets.forEach(pet => {
    const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
    petList.append(petItem);
  });
}

// Run the loader when document is ready
$(document).ready(loadPets);
