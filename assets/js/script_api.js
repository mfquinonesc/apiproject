

const API = "https://jsonplaceholder.typicode.com/users";

const DOGAPI = "https://random.dog/woof.json";

let imageArray =[];

const getUserData = (api) => {
    return fetch(api)
        .then((response) => response.json())                    //promesa 
        .then((json) => {
            fillForm(json);
        })                                                      // si se cumple la promesa
        .catch((error) => {
            console.log("Error", error);
        });
};


function fillImageArray(){
    fetch(DOGAPI)
        .then(response => response.json())
        .then(data => imageArray.push(data.url));
}


const fillUrls = ()=>{
    for(let i =0; i < 10;i++){
        fillImageArray();
    }
    console.log(imageArray);
};

const fillForm = (data) => {
    let html = "";  
    let i = 0;
    data.forEach((user) => {                    
        html += '<div class="card">';
        html += '<div class="card-img">';
        html += `<img src="${imageArray[i]}" alt="User Image">`;
        html += '</div>';
        html += '<div class="card-data">';
        html += `<h2 class="user-name">${user.name}</h2>`;
        html += `<p class="user-email"><span>Email: </span>${user.email}</p>`;
        html += `<p class="user-city"><span>City: </span>${user.address.city}</p>`;
        html += '<a href="">Follow me</a>'
        html += '</div>';
        html += '</div>';
        i++;
    });
    document.getElementById("user-data").innerHTML = html;
};

fillUrls();
getUserData(API);

