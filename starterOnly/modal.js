function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const modalClose = document.querySelectorAll(".close")
const first = document.querySelector("#first")
const last = document.querySelector("#last")
const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")
const cities = document.getElementsByName("location")
const cgu = document.getElementById("checkbox1")
const formSend = document.querySelector("[name=reserve]")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// close modal event
modalClose.forEach((span) => span.addEventListener("click", closeModal))

//close modal form
function closeModal() {
  modalbg.style.display = "none"
}

// validity of the field's form

const regexText = /^[a-z]{2,}/i
function isValidText(x) {
  return regexText.test(x)
}

// validity of firstName
isValidText(first.value)

// validity of lastName
isValidText(last.value)

// validity of email
/**
 * General Email Regex (RFC 5322 Official Standard)
 */
const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isValidEmail() {
  return regexEmail.test(email.value)
}

// validity of birthdate
function isValidBirthdate() {
  const isBirthdate = birthdate.value
  return isBirthdate.length === 10 ? true : false
}

// validity of tournament
const regexTournament = /^[0-9]{1,}/

function isValidetournamentNumber() {
  return regexTournament.test(quantity.value)
}

// validity of location
var checkedCities = false
function isCheckedCity() {
  for (var item of cities) {
    if (item.checked == true) {
      checkedCities = true
    }
  }
}

//validity CGU

function isCheckedCgu() {
  if (cgu.checked == true) {
    return true
  } else {
    return false
  }
}

//blocking send form
function notEraseForm(event) {
  event.preventDefault()
}

//validity of the form
formSend.addEventListener("submit", notEraseForm)

function validate() {
  isValidBirthdate()
  isCheckedCgu()
  isCheckedCity()
  var errors = []
  if (isValidText(first.value) == false) {
    errors.push("firstError")
    document.getElementById("error__firstname").textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom"
  } else {
    document.getElementById("error__firstname").textContent = ""
  }
  if (isValidText(last.value) == false) {
    errors.push("lastError")
    document.getElementById("error__lastname").textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom"
  } else {
    document.getElementById("error__lastname").textContent = ""
  }

  if (isValidEmail() == false) {
    errors.push("emailError")
    document.getElementById("error__email").textContent =
      "Veuillez entrer une adresse email valide"
  } else {
    document.getElementById("error__email").textContent = ""
  }
  if (isValidBirthdate() == false) {
    errors.push("birthdateError")
    document.getElementById("error__birthdate").textContent =
      "Veuillez entrer votre date de naissance"
  } else {
    document.getElementById("error__birthdate").textContent = ""
  }
  if (isValidetournamentNumber() == false) {
    errors.push("quantityError")
    document.getElementById("error__quantity").textContent =
      "Veuillez entrer un nombre"
  } else {
    document.getElementById("error__quantity").textContent = ""
  }
  if (checkedCities == false) {
    errors.push("locationError")
    document.getElementById("error__location").textContent =
      "Veuillez choisir au moins une option"
  } else {
    document.getElementById("error__location").textContent = ""
  }
  if (isCheckedCgu() == false) {
    errors.push("agreeError")
    document.getElementById("error__agree").textContent =
      "Veuillez accepter les conditions d'utilisation"
  } else {
    document.getElementById("error__agree").textContent = ""
  }

  if (errors.length == 0) {
    document.querySelector(".confirm").style.display = "block"
    formSend.style.display = "none"
    setInterval(() => formSend.submit(), 3000)
    return true
  } else {
    return false
  }
}
