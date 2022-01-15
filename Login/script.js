"use strict";
//selecting elements
const loginBtn = document.getElementById("loginBtn");
const invalidLogin = document.querySelector("#invalidLogin");
const loginForm = document.querySelector(".loginForm");
// login validation functions
const loginValidator = (login, password) => {
    if (login === "user" && password === "password") {
        return true;
    }
    else {
        return false;
    }
};
const nullValueCheck = (login, password) => {
    if (login === "" && password === "") {
        return true;
    }
    else if (login.length < 3 || password.length < 5) {
        return true;
    }
    else {
        return false;
    }
};
class Login {
    constructor(loginID, password) {
        this.loginID = loginID;
        this.password = password;
    }
}
//implementing login
loginBtn.addEventListener("click", () => {
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const loginObj = new Login(login.value, password.value);
    console.log(loginObj);
    if (nullValueCheck(loginObj.loginID, loginObj.password)) {
        invalidLogin.innerHTML = "Please enter a valid login";
    }
    if (loginValidator(loginObj.loginID, loginObj.password)) {
        invalidLogin.innerHTML = "Login successfull";
        window.location.href = "./Dashboard/index.html";
    }
    else {
        invalidLogin.innerHTML = "Invalid Login Credentials";
    }
});
