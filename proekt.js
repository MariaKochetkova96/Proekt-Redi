function updateCvDetails(email, telefon, address, name, profession) {
  var cvEmail = document.querySelector("#cv-email")
  var cvTelefon = document.querySelector("#cv-tel-number")
  var cvAddress = document.querySelector("#cv-address")
  var cvName = document.querySelector("#cv-name")
  var cvProfession = document.querySelector("#cv-profession")
  
  cvEmail.innerHTML = `${email}`
  cvTelefon.innerHTML = `${telefon}`
  cvAddress.innerHTML =`${address}`
  cvName.innerHTML = `${name}`
  cvProfession.innerHTML =`${profession}` 
}

function handleDetailsSubmit(e) {
  e.preventDefault()
  var email = document.querySelector("#form-email").value
  var telefon = document.querySelector("#form-tel-number").value
  var address = document.querySelector("#form-address").value
  var name = document.querySelector("#form-name").value
  var profession = document.querySelector("#form-profession").value
  updateCvDetails(email, telefon, address, name, profession)
}

var detailsForm = document.querySelector("#details-form")

detailsForm.addEventListener("submit", e => handleDetailsSubmit(e))


function updateCvLanguages(language) {
  var cvLanguageList = document.querySelector("#cv-language-list")
  var listItem = document.createElement("li")
  listItem.innerHTML = `${language}`
  cvLanguageList.append(listItem)
}

function handleLanguageSubmit(e) {
  e.preventDefault()
  var language = document.querySelector("#form-languages").value
  updateCvLanguages(language)
}

var languagesForm = document.querySelector("#languages-form")

languagesForm.addEventListener("submit", e => handleLanguageSubmit(e))
 

function updateCvSkills(skill) {
  var cvSkillList = document.querySelector("#cv-skill-list")
  var listItem = document.createElement("li")
  listItem.innerHTML = `${skill}`
  cvSkillList.append(listItem)
}

function handleSkillsSubmit(e) {
  e.preventDefault()
  var skill = document.querySelector("#form-skills").value
  updateCvSkills(skill)
}

var skillsForm = document.querySelector("#skills-form")

skillsForm.addEventListener("submit", e => handleSkillsSubmit(e))


function updateCvSelfInfo(selfInfo) {
  var cvSelfInfo = document.querySelector("#cv-self-info")
  
  cvSelfInfo.innerHTML = `${selfInfo}`
}  

function handleSelfInfoSubmit(e) {
  e.preventDefault()
  var selfinfo = document.querySelector("#form-self-info").value
  
  updateCvSelfInfo(selfinfo)
}

var selfInfoForm = document.querySelector("#self-info-form")

selfInfoForm.addEventListener("submit", e => handleSelfInfoSubmit(e))


function updateCvEducation(period, education) {
  var cveducationList = document.querySelector("#cv-education-list")
  var listItem = document.createElement("li")
  listItem.innerHTML = `
    <div class="date" id="cv-period>:${period}
    <div class="info" id="cv-education-info">:${education}
    </div>
    </div>
      `
  cvEducationList.append(listItem)
  var list = document.querySelector('#user-list')
}

function handleEducationSubmit(e) {
  e.preventDefault()
  var period = document.querySelector("#form-period").value
  var education = document.querySelector("#form-education").value
  updateCvEducation(period, education)
}

var educationForm = document.querySelector("#education-form")

educationForm.addEventListener("submit", e => handleEducationSubmit(e))

//function generatePDF() {
 //   const element = document.getElementById('#anketa);
   // proekt.html()
     //   .from(element)
       // .save();
//} innerhtml

