var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
        for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemeu = document.getElementById("sidemenu");
function openMenu(){
    sidemeu.style.right = "0";
}
function closeMenu(){
    sidemeu.style.right = "-200px";
}


const downloadBtn = document.getElementById("download-cv-btn");
const msg = document.getElementById("msg"); // Re-use 
downloadBtn.addEventListener('click', () => {

    setTimeout(() => {
        msg.innerHTML = "Resume has been downloaded!";
      
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000); 
    }, 100); 
});