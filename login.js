let loginnameinp = document.querySelector("#loginnameinp");
let loginpassinp = document.querySelector("#loginpassinp");
let signUp = document.querySelector("#sign-up");
let enter = document.querySelector("#enterlog");


enter.addEventListener("click", function(){
    const savedData = JSON.parse(window.localStorage.getItem("userData"));
    if (savedData && loginnameinp.value === savedData.name && loginpassinp.value === savedData.password) {
    alert ("okey");

    window.location = "./users.html"
    
        
    } else {
        alert("yanlishdir");
        
    }
})

signUp.addEventListener("click", function(){
     window.location = "./index.html"
})