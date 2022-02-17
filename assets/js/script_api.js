

const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
    return fetch(api)
    .then((response) => response.json())                    //promesa 
    .then((json) => {
        llenarDatos(json);
    })                                                      // si se cumple la promesa
    .catch((error) => {
        console.log("Error", error);
    });
};


const llenarDatos = (data) => {
    let html = "";
    data.forEach((user) => {
        html += '<div class="card" style="width: 18rem;">';
        html += `<img src="" class="card-img-top" alt="...">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${user.name}</h5>`;
        html += `<p class="card-text">${user.email}</p>`;
        html += `<a href="#" class="btn btn-primary">${user.address.city}</a>`;
        html += ' </div>';
        html += '</div>';
    });
    document.getElementById("character-data").innerHTML = html;
};

getData(API);