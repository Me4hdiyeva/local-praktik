let usersVal = document.querySelector("#users-value")
let logOut = document.querySelector("#log-out")

const user = window.localStorage.getItem("userData");

 usersVal.textContent = user;


 logOut.addEventListener("click", function(){
      window.location = "./sigin.html"
 })
