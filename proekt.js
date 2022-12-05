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
  document.querySelector("#cv-period-placeholder").remove()
  document.querySelector("#cv-period-placeholder").remove()
  var cvEducationList = document.querySelector("#cv-education-list")
  var listItem = document.createElement("li")
  listItem.innerHTML = `
    <div class="date" id="cv-period">${period}</div>
    <div class="info" id="cv-education-info">  
        <p>${education}</p>
    </div>
      `
  cvEducationList.append(listItem)
}

function handleEducationSubmit(e) {
  e.preventDefault()
  var period = document.querySelector("#form-period").value
  var education = document.querySelector("#form-education").value
  updateCvEducation(period, education)
}

var educationForm = document.querySelector("#education-form")

educationForm.addEventListener("submit", e => handleEducationSubmit(e))


function updateCvEducation(period, titel, work) {
  document.querySelector("#cv-work-period-placeholder").remove()
  document.querySelector("#cv-work-titel-placeholder").remove()
  document.querySelector("#cv-work-info-placeholder").remove()

  var cvWorkList = document.querySelector("#cv-work-list")
  var listItem = document.createElement("li")
  listItem.innerHTML = `
  <div class="date" id="cv-work-period">${period} </div>
  <div class="info"> 
     <p class="titel" id="cv-work-titel">${titel}</p> 
     <p id="cv-work-info">${work}</p>
  </div>
      `
  cvWorkList.append(listItem)
}

function handleWorkSubmit(e) {
  e.preventDefault()
  var period = document.querySelector("#form-period-work").value
  var titel = document.querySelector("#form-work-titel").value
  var work = document.querySelector("#form-work-info").value
  updateCvEducation(period, titel, work)
}

var workForm = document.querySelector("#work-form")

workForm.addEventListener("submit", e => handleWorkSubmit(e))
 

function updateCvPortrait(portrait) {
  var cvPortrait = document.querySelector("#cv-portrait-placeholder").remove()
  cvPortrait.innerHTML = `${portrait}`
}

function handlePortrait(e) {
  e.preventDefault()
  var portrait = document.querySelector("#form-portrait").value
  updateCvPortrait(portrait)
 } 
    
var portrait = document.querySelector("#form-portrait")

portrait.addEventListener("submit", e => handlePortrait(e))

window.jsPDF = window.jsPDF.jsPDF;

function generatePDF() {
  var proekt = new jsPDF()
  proekt.save("proekt.pdf")
} 

