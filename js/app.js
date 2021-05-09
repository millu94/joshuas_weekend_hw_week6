document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded");

    const form = document.querySelector('form');
    form.addEventListener('submit', handleForm);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleDeleteAll);
})

const handleForm = function (event) {
    event.preventDefault();

    console.log(event);
    

    const newGuineaPig = createNewPig(event.target)
    const guineaList = document.querySelector("#cool-guinea-pigs");
    guineaList.appendChild(newGuineaPig);

    event.target.reset();
}

const createNewPig = function (form) {

    const newPigItem = document.createElement('li');
    newPigItem.classList.add('newPigItem');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    newPigItem.appendChild(name);

    const breeds = document.createElement('h3');
    breeds.textContent = form.breeds.value;
    newPigItem.appendChild(breeds);

    const favouriteSnack = document.createElement('p');
    favouriteSnack.textContent = form.favouritesnack.value;
    newPigItem.appendChild(favouriteSnack);

    return newPigItem
}

const handleDeleteAll = function (event) {
    const guineaList = document.querySelector('#cool-guinea-pigs');
    guineaList.innerHTML = '';
}