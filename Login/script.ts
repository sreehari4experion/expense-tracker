//selecting elements

const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement

const invalidLogin = document.querySelector("#invalidLogin") as HTMLDivElement
const loginForm = document.querySelector(".loginForm") as HTMLFormElement

// login validation functions

const loginValidator = (login: string, password: string) => {
  if (login === "user" && password === "password") {
    return true
  } else {
    return false
  }
}
const nullValueCheck = (login: string, password: string) => {
  if (login === "" && password === "") {
    return true
  } else if (login.length < 3 || password.length < 5) {
    return true
  } else {
    return false
  }
}

class Login {
  loginID: string
  password: string
  constructor(loginID: string, password: string) {
    this.loginID = loginID
    this.password = password
  }
}

//implementing login

loginBtn.addEventListener("click", () => {
  const login = document.getElementById("login") as HTMLInputElement
  const password = document.getElementById("password") as HTMLInputElement
  const loginObj = new Login(login.value, password.value)
  console.log(loginObj)
  if (nullValueCheck(loginObj.loginID, loginObj.password)) {
    invalidLogin.innerHTML = "Please enter a valid login"
  }
  if (loginValidator(loginObj.loginID, loginObj.password)) {
    invalidLogin.innerHTML = "Login successfull"
    window.location.href = "./Dashboard/index.html"
  } else {
    invalidLogin.innerHTML = "Invalid Login Credentials"
  }
})
