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
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const modalClose = document.querySelectorAll(".close")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const first = document.querySelector("#first")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const last = document.querySelector("#last")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const birthdate = document.querySelector("#birthdate")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const quantity = document.querySelector("#quantity")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const cities = document.getElementsByName("location")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const cgu = document.getElementById("checkbox1")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const formSend = document.querySelector("[name=reserve]")
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const confirmClose = document.querySelectorAll(".confirm__button")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// close modal event
/**
 * @description écoute le click sur l'élément span pour active la function closeModal
 * @auteur Alexia Skrzypczak
 */
modalClose.forEach((span) => span.addEventListener("click", closeModal))

//close modal form
/**
 * @description fait visuellement disparaître la fenêtre  modale
 * @auteur Alexia Skrzypczak
 */
function closeModal() {
  modalbg.style.display = "none"
}

// close modal with button of confirm
/**
 * @description écoute le click sur l'élément button pour active la function confirmModal
 * @auteur Alexia Skrzypczak
 */
confirmClose.forEach((button) => button.addEventListener("click", closeModal))

// validity of the field's form
/**
 * @constant {object}
 * @auteur Alexia Skrzypczak
 */
const regexText = /^[a-z]{2,}/i
/**
 *
 * @param {string} textValue
 * @returns {boolean} si c'est vrai : le texte respecte l'expression rationnelle
 * @auteur Alexia Skrzypczak
 */
function isValidText(textValue) {
  return regexText.test(textValue)
}

// validity of firstName
/**
 * @description vérifie la validité du prénom
 * @auteur Alexia Skrzypczak
 */
isValidText(first.value)

// validity of lastName
/**
 * @description vérifie la validité du nom
 * @auteur Alexia Skrzypczak
 */
isValidText(last.value)

// validity of email
/**
 * @constant {object}
 * @auteur General Email Regex (RFC 5322 Official Standard)
 */
const regexEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * @description vérifie la validité de l'email
 * @returns {boolean} si c'est vrai : le texte respecte l'expression rationnelle
 * @auteur Alexia Skrzypczak
 */
function isValidEmail() {
  return regexEmail.test(email.value)
}

// validity of birthdate
/**
 * @description vérifie la validité de la date de naissance
 * @returns {boolean} si c'est vrai : la longueur de la valeur est strictement égale à 10 caractères
 * @auteur Alexia Skrzypczak
 */
function isValidBirthdate() {
  /**
   * @constant
   * @type {string}
   * @auteur Alexia Skrzypczak
   */
  const isBirthdate = birthdate.value
  return isBirthdate.length === 10 ? true : false
}

// validity of tournament
/**
 * @constant {object}
 * @description doit être au moins un chiffre de 0 à 9
 * @auteur Alexia Skrzypczak
 */
const regexTournament = /^[0-9]{1,}/
/**
 * @description vérifie le nombre de tournoi déjà participé
 * @returns {boolean} si c'est vrai : le texte respecte l'expression rationnelle
 * @auteur Alexia Skrzypczak
 */
function isValidetournamentNumber() {
  return regexTournament.test(quantity.value)
}

// validity of location
/**
 * @constant {boolean}
 * @auteur Alexia Skrzypczak
 */
var checkedCities = false
/**
 * @description vérifie qu'une ville est cochée
 * @auteur Alexia Skrzypczak
 */
function isCheckedCity() {
  for (var item of cities) {
    if (item.checked == true) {
      checkedCities = true
    }
  }
}

//validity CGU

/**
 * @description vérifie que la case des conditions d'utilisation est cochée
 * @returns {boolean} si c'est vrai : la case est coché
 * @auteur Alexia Skrzypczak
 */
function isCheckedCgu() {
  if (cgu.checked == true) {
    return true
  } else {
    return false
  }
}

//blocking send form
/**
 * @description empêche l'exécution par défault de l'évenement
 * @param {object} event
 * @auteur Alexia Skrzypczak
 */
function notEraseForm(event) {
  event.preventDefault()
}

//validity of the form
/**
 * @description écoute la soummission du formulaire et exécute la function notEraseForm() s'il est soumis
 * @auteur Alexia Skrzypczak
 */
formSend.addEventListener("submit", notEraseForm)

/**
 * @returns {boolean} si c'est vrai : le formulaire est validé
 * @auteur Alexia Skrzypczak
 */
function validate() {
  isValidBirthdate()
  isCheckedCgu()
  isCheckedCity()
  /**
   * @description tableau pour enregistrer les champs invalides du formulaire
   * @type {string[]}
   * @auteur Alexia Skrzypczak
   */
  var errors = []

  //Checking the validity of each form field
  /**
   * @description si le prénom n'est pas valide, enregistre cette ligne dans le tableau des champs invalides.
   * @auteur Alexia Skrzypczak
   */
  if (isValidText(first.value) == false) {
    errors.push("firstError")
    document.getElementById("error__firstname").textContent =
      "Veuillez entrer 2 caractères ou plus pour le prénom"
  } else {
    document.getElementById("error__firstname").textContent = ""
  }

  /**
   * @description si le nom n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (isValidText(last.value) == false) {
    errors.push("lastError")
    document.getElementById("error__lastname").textContent =
      "Veuillez entrer 2 caractères ou plus pour le nom"
  } else {
    document.getElementById("error__lastname").textContent = ""
  }

  /**
   * @description si l'email' n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (isValidEmail() == false) {
    errors.push("emailError")
    document.getElementById("error__email").textContent =
      "Veuillez entrer une adresse email valide"
  } else {
    document.getElementById("error__email").textContent = ""
  }
  /**
   * @description si la date de naissance n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (isValidBirthdate() == false) {
    errors.push("birthdateError")
    document.getElementById("error__birthdate").textContent =
      "Veuillez entrer votre date de naissance"
  } else {
    document.getElementById("error__birthdate").textContent = ""
  }

  /**
   * @description si le nombre de tournois n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (isValidetournamentNumber() == false) {
    errors.push("quantityError")
    document.getElementById("error__quantity").textContent =
      "Veuillez entrer un nombre"
  } else {
    document.getElementById("error__quantity").textContent = ""
  }
  /**
   * @description si lla ville n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (checkedCities == false) {
    errors.push("locationError")
    document.getElementById("error__location").textContent =
      "Veuillez choisir au moins une option"
  } else {
    document.getElementById("error__location").textContent = ""
  }

  /**
   * @description si les cgu n'est pas valide, enregistre cette ligne dans le tableau des champs invalides
   * @auteur Alexia Skrzypczak
   */
  if (isCheckedCgu() == false) {
    errors.push("agreeError")
    document.getElementById("error__agree").textContent =
      "Veuillez accepter les conditions d'utilisation"
  } else {
    document.getElementById("error__agree").textContent = ""
  }

  /**
   * @description si le tableaux des champs invalides est vide alors un block de confirmation apparaît et le formulaire disparaît et est soumis après 4 secondes
   * @auteur Alexia Skrzypczak
   */
  if (errors.length == 0) {
    /**
     * @description apparition du block de confirmation d'incription'
     * @auteur Alexia Skrzypczak
     */
    document.querySelector(".confirm").style.display = "block"
    /**
     * @description fermuture du formulaire
     * @auteur Alexia Skrzypczak
     */
    formSend.style.display = "none"
    /**
     * @description soummission du formulaire au bout de 4 secondes
     * @auteur Alexia Skrzypczak
     */
    //*
    // setInterval(() => formSend.submit(), 4000)
    return true
  } else {
    return false
  }
}
