let nameinp = document.querySelector("#name")
let passinp = document.querySelector("#pass")
let enterbtn = document.querySelector("#enter")
let loginbtn = document.querySelector("#login")


// class createUser {
//     constructor(userName, passWord) {
//         this.username = userName;
//         this.password = passWord;
//     }
// }


// class login{

// }


// nameinp.addEventListener("username" , function(){

// })

enterbtn.addEventListener("click", () => {
    if (nameinp.value.trim() === "" || passinp.value.trim() === "") {
        alert("ad ve parol daxil edin")

    } else {
        const userData = {
            name: nameinp.value,
            password: passinp.value
        };
        window.localStorage.setItem("userData", JSON.stringify(userData));
        window.location = "./login.html";
            
        // console.log("Məlumat saxlanildi:", userData);
nameinp.value = "";
passinp.value = "";
       
    }

});

loginbtn.addEventListener("click",function (){
    window.location = "./login.html";
})




