//Contact validation form
function formValidation()  {
    const email = document.getElementById("emailAddress").value;
    let emailStr = String(email);
    const phone = document.getElementById("phoneNumber").value;
    let phoneStr = String(phone);
    if ((emailStr.indexOf('@') === -1) && (phoneStr.length < 10)) {
        alert("Not a valid e-mail address and phone number is too short (less than 10 characters)");
        return false;
    } else if (emailStr.indexOf('@') === -1) {
        alert("Not a valid e-mail address!");
        return false;
    } else if (phoneStr.length < 10) {
        alert("Phone number is too short (less than 10 characters)");
        return false;
    } else {
        return true;
    }
}
//burger
function burgerMenu() {
    let fullPageLinks = document.getElementById('fullPageLinks');//makes variable set to the same name as it is in the HTML
    if (fullPageLinks.style.display === 'flex') {//if the user has clicked the burger then it checks if the 'fullPageLinks' div is in displayed or not and if it is then it stops diplaying and if it's not then it does display
        fullPageLinks.style.display = 'none';
    } else {
        fullPageLinks.style.display = 'flex';//styling for the look and functionality of the page links
        fullPageLinks.style.flexDirection = 'column';
    }
}
//carousel
function carouselDemo(n) {
    var i;
    var slide = document.getElementsByClassName("card");
    var circles = document.getElementsByClassName("circle");
    if (n > slide.length) {
        pos = 1;
    }
    if (n < 1) {
        pos = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" on", "");
    }
    const slideStyle = "block";
    slide[pos - 1].style.display = slideStyle;
    circles[pos - 1].className += " on";
}
function add(n) {
    carouselDemo(pos += n);
}
function current(n) {
    carouselDemo(pos = n);
}
