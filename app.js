

// ------------contenu--------------------

// -----------partie competence------------
var tabliens = document.getElementsByClassName("tab-liens");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablien of tabliens){
        tablien.classList.remove("active-lien");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-lien");
    document.getElementById(tabname).classList.add("active-tab");
}
// ---------fin  partie competence---------

// ------------contenu--------------------

// -----------------------------partie responsive--------------------------
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// -----------------------------partie URL application web--------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbwXulQmW2BaJFs-TkdQCFohP9V6VdbJJy2MpKV2Gg3_m-_BftpzUzsEYR6T-UqVdBEA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message envoyé !"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
