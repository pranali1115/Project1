//**************************************************************HOME************************************************************************************************* */
var typed = new Typed('#element', {
    strings: ['Web Developer...', 'Web Designer...', 'Artist...'],
    typeSpeed: 50,
});

let sidemenu = document.getElementById('sidemenu')
function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}


// *************************************************************ABOUT***************************************************************************************************
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}
// ****************************************************************Contact/Google Sheets******************************************************************************************

const scriptURL = 'https://script.google.com/macros/s/AKfycbx6Wohe4BxlRPMRA97uAGS-vTrSvgTHl_ENv1iz45DjlFseUpvZuTGaJidHvowdb0rk/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})