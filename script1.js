username = prompt("Hi, can I have your name please?");
alert("Welcome, I'm happy to have you as a visitor please go through this website "+ username);
//TASK 1 - Admin Login Button should bring back Admin login section
let controlOfAdminLogin = document.getElementById("admin-login");

function showAdminLogin() {
  controlOfAdminLogin.style.display = "block";
}

//TASK 2 - MAKE TOGGLE BUTTON WORK
let controlOfThemeBtn = document.getElementById("switch-theme");

controlOfThemeBtn.addEventListener('click', function(){
document.body.classList.toggle("dark-theme");
});

//TASK 3 - Make your Admin Login work.
let controlOfAdminForm = document.getElementById("admin-form");

controlOfAdminForm.addEventListener('submit', function(e){
  e.preventDefault();
  let storedUsername = "Rupalihingankar";
  let storedPassword =  "Rupali@12005";
  
  let username = document.getElementById("usrnme").value;
  let password = document.getElementById("pwd").value;
  
  /
  if (storedUsername == username && storedPassword == password) {
    alert("Welcome Admin!");
    
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("user-responses").style.display = "block";
    
    displayUserMessages();
  }
  else {
    alert("Access denied!!");
  }
});

//TASK 4 - Store user response from the contact me section in a backend(Chrome LocalStorage)

let controlOfContactmeForm = document.getElementById("contact-me-form");

controlOfContactmeForm.addEventListener('submit', function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("msg").value;
  let date = new Date().toLocaleString(); //We are getting the date from the system
  
 
  
  let response = {
    name, email, message, date
  }
  
 
  
 
  let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [ ]; /
  DummyDatabase.push(response) 
  
  
 
  localStorage.setItem('tempDB', JSON.stringify(DummyDatabase));
  alert("Thank you for your message, will get back to you shortly!");
  this.reset();
});


function displayUserMessages(){
  //get all responses from the dummy database and show them in the UI on user responses section(After admin login has correct creds.)
  let ControlOfUserMessages = document.getElementById("user-messages");
  
  let DummyDatabase = JSON.parse(localStorage.getItem('tempDB')) || [ ];
  
  DummyDatabase.forEach(response=>{
    let ControlOfResponseElement = document.createElement('div');
    
    ControlOfResponseElement.innerHTML = `
    <p> Name: ${response.name} </p>
    <p> Email: ${response.email} </p>
    <p> Message: ${response.message} </p>
    <p> Date: ${response.date} </p>
    <hr>
    `
    ControlOfUserMessages.append(ControlOfResponseElement);
  });
}


