let form = document.querySelector('form');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let user = document.querySelector("#user");
    let password = document.querySelector("#pass");
    console.log(user.value);
    console.log(password.value);
    alert(`hi ${user.value} your password is ${pass.value}`);
})