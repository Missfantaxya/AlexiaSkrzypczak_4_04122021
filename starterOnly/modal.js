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
  isCheckedCgu()
  isCheckedCity()
  var errors = []
  if (isValidText(first.value) == false) {
    errors.push("firstError")
  }
  if (isValidText(last.value) == false) {
    errors.push("lastError")
  }
  if (isValidEmail() == false) {
    errors.push("emailError")
  }
  if (isValidetournamentNumber() == false) {
    errors.push("quantityError")
  }
  if (checkedCities == false) {
    errors.push("locationError")
  }
  if (isCheckedCgu() == false) {
    errors.push("agreeError")
  }
  // console.log("errors :", errors)
  // console.log("errors.length :", errors.length)

  if (errors.length == 0) {
    formSend.submit()
    return true
  } else {
    return false
  }
}
