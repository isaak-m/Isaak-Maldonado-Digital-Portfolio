//Contact validation form
function formValidation()  {
    let email = document.getElementsByName("emailAddress").value;
    const emailStr = String(email);
    let phone = document.getElementsByName("phoneNumber").value;
    const phoneStr = String(phone);
    if ((emailStr.indexOf('@') === -1) && (phoneStr.length < 8)) {
        alert("Not a valid e-mail address and phone number is too short (less than 9 characters)");
        document.write(email)
        return false;
    } else if (emailStr.indexOf('@') === -1) {
        alert("Not a valid e-mail address!");
        return false;
    } else if (phoneStr.length < 8) {
        alert("Phone number is too short (less than 9 characters)");
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