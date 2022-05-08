//Contact validation form
function emailTest(form)  {
    let emailLength = 0;
    if (form.email_address.value.indexOf("@", 0) < 0) {
        alert("Not a valid e-mail address!");
        emailLength = 1;
    } else {
        let strLength = document.myForm.email_address.value.length;
        if(strLength < 6 ) {
            alert("E-mail address is too short (less than 6 characters)");
            emailLength = 1;}
    }
    if(emailLength == 0) {
        alert("This e-mail address could be valid and is at least six characters long");
    }
}
function phoneTest(form)  {
    let phoneLength = 0;
    if (form.phone_number.value.indexOf(("(" && ")"), 0) < 0) {
        alert("Not a valid phone number!");
        phoneLength = 1;
    } else {
        let strLength = document.myForm.phone_number.value.length;
        if(strLength < 8 ) {
            alert("E-mail address is too short (less than 9 characters)");
            phoneLength = 1;}
    }
    if(phoneLength == 0) {
        alert("This phone number could be valid and is at least nine characters long");
    }
}
function validatePhoneEmail() {
    document.getElementById("validationForm").submit();
    console.log(phoneTest());
    console.log(emailTest());
}
//burger idea
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.countrypages');
    const countryPages = document.querySelectorAll('.countrypages div');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        countryPages.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `countryPagesFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();