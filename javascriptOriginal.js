function spring() {
    sessionStorage.setItem('season', 'spring');
    location.reload();





    document.getElementById('body').style.backgroundImage = 'url(images/spring.jpg)';
    document.getElementById('mainText').style.background = "#FFE4E1";

    var newsLetterForm = document.getElementById('newsLetterForm');
    newsLetterForm.style.borderColor = "#FF9F95";

    var input = document.getElementsByTagName('input');
    for(var i = 0; i < input.length; i ++){
        input[i].style.color = '#FF9F95';
    }  

}


function summer() {
    sessionStorage.setItem('season', 'summer');
    document.getElementById('body').style.backgroundImage = 'url(images/summer.jpg)';
    document.getElementById('mainText').style.background = "#B9DFF6";

    var newsLetterForm = document.getElementById('newsLetterForm');
    newsLetterForm.style.borderColor = "#54B0E8";
}

function fall() {
    sessionStorage.setItem('season', 'fall');
    document.getElementById('body').style.backgroundImage = 'url(images/fall.jpg)';
    document.getElementById('mainText').style.background = "#F0D17B";

    var newsLetterForm = document.getElementById('newsLetterForm');
    newsLetterForm.style.borderColor = "#FF8100";

    var input = document.getElementsByTagName('input');
    for(var i = 0; i < input.length; i ++){
        input[i].style.color = '#FF8100';
    }  
}

function winter() {
    sessionStorage.setItem('season', 'winter');
    document.getElementById('body').style.backgroundImage = 'url(images/winter.jpg)';
    document.getElementById('mainText').style.background = "#B9DFF6";
    var newsLetterForm = document.getElementById('newsLetterForm');
    newsLetterForm.style.borderColor = "#54B0E8";

    var navbar = document.getElementsByClassName('navbar');
    for(var i = 0; i < navbar.length; i ++){
        navbar[i].style.color = '#8CCAF0';
    } 

    var input = document.getElementsByTagName('input');
    for(var i = 0; i < input.length; i ++){
        input[i].style.color = '#54B0E8';
    }   

    //document.getElementById('newsLetterForm').style.background = "purple";

}

function blankAndBlack(event) { /* how does this event thing help me? */
    if(event.target.style.color !== 'black') {
        event.target.style.color = "black";
        event.target.value = "";
    }
}

function reveal() {
    event.target.style.opacity = '1';
    event.target.style.maxHeight = '1000px';
    event.target.style.overflower = 'visible';
       
}

//var season = prompt("Choose a season.");


document.getElementById("spring").addEventListener("click", spring);
document.getElementById("summer").addEventListener("click", summer);
document.getElementById("fall").addEventListener("click", fall);
document.getElementById("winter").addEventListener("click", winter);


//document.forms['newsLetterForm'].newsLetterType.addEventListener('checked', reveal);

document.forms['newsLetterForm'].email.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].name.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].houseNumber.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].streetName.addEventListener('click', blankAndBlack);
document.forms['newsLetterForm'].zipCode.addEventListener('click', blankAndBlack);

if(sessionStorage.getItem('season') == 'spring'){
    spring();
}

if(sessionStorage.getItem('season') == 'summer'){
    summer();
}

if(sessionStorage.getItem('season') == 'fall'){
    fall();
}

if(sessionStorage.getItem('season') == 'winter'){
    winter();
}

