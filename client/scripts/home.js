const { log } = require("console");

let responseDOM = document.getElementById("response")


function getUsers(){
    axios.get('http://localhost:3000')
    .then(function (response) {
      // handle success

      responseDOM.innerHTML = response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function saveUser(){
  let username = document.getElementById("username").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let user = {}

  user.username = username
  user.email = email
  user.password = password


  axios.post('http://localhost:3000', user)
  .then(function (response){
    console.log(response);
    responseDOM.innerHTML = response.data
  })
  .catch(function(error){
    console.log(error);
  })



}