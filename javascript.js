function spring() {
    sessionStorage.setItem('season', 'spring');
    location.reload();
    // change color of selected her
}


function summer() {
    sessionStorage.setItem('season', 'summer');
    location.reload(); 
}

function fall() {
    sessionStorage.setItem('season', 'fall');
    location.reload();
}

function winter() {
    sessionStorage.setItem('season', 'winter');
    location.reload();

}

function blankAndBlack(event) { /* how does this event thing help me? */
    if(event.target.style.color !== 'black') {
        event.target.style.color = "black";
        event.target.value = "";
    }
}


document.getElementById("spring").addEventListener("click", spring);
document.getElementById("summer").addEventListener("click", summer);
document.getElementById("fall").addEventListener("click", fall);
document.getElementById("winter").addEventListener("click", winter);


//document.getElementById('emailRadio').addEventListener('onchange', reveal);

document.forms['newsLetterForm'].email.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].firstName.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].lastName.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].houseNumber.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].streetName.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].zipCode.addEventListener('click', blankAndBlack);




