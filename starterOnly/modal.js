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
  console.log("checkedCities :", checkedCities)
}

//validity of the form

// function validate() {
// validity of the field's form

const regexText = /^[a-z]{2,}/i
function isValidText(x) {
  return regexText.test(x)
}

// validity of firstName
isValidText(first.value)
console.log("first :", isValidText(first.value))

// validity of lastName
isValidText(last.value)
console.log("last :", isValidText(last.value))

// validity of email
/**
 * General Email Regex (RFC 5322 Official Standard)
 */
const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isValidEmail() {
  return regexEmail.test(email.value)
}
console.log("isValidEmail :", isValidEmail())

// validity of tournament
const regexTournament = /^[0-9]{1,}/

function isValidetournamentNumber() {
  return regexTournament.test(quantity.value)
}
console.log("isValidetournamentNumber() :", isValidetournamentNumber())

// isValidetournamentNumber(quantity.value)

// validity of location
cities.forEach((item) => {
  if ((item.checked = true)) {
    checkedCities = true
  }
})
console.log("cities :", cities)
console.log("checkedCities :", checkedCities)

//validity CGU

function isCheckedCgu(x) {
  if (x.checked == true) {
    return true
  }
}

// cgu.addEventListener("click", function (e) {
isCheckedCgu(cgu)
console.log("cgu :", isCheckedCgu(cgu))
// })
// }

//Non envoie du formulaire
function notEraseForm(event) {
  event.preventDefault()
}

formSend.addEventListener("submit", notEraseForm)

document.querySelector(".btn-submit").addEventListener("click", function (e) {
  console.log("validate() :", validate())
})
