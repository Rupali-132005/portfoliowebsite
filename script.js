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
//TASK 2 - make your admin login work
let controlOfAdminform = document.getElementById("admin-form");
controlOfAdminform.addEventListener('submit', function(e){
  e.preventDefault();
    let storedusername = "Rupalihingankar";
    let storedpassword = "Password@123";
  let username = document.getElementById("usrnme").value;
  let password = document.getElementById("pwd").value;
  if (storedUsername == username && storedPassword == password) {
    alert("Welcome Admin!");
  document.getElementById("admin-login").style.display = "none";
  document.getElementById("user-responses").style.display = "block";
    
  }
  else {
    alert("Access denied!!");
  }

});