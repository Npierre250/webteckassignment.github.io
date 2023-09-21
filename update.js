
function validate() {
    var isemailvalidate = true;
    var ispassvalidate = true;

    if (document.getElementById("email").value == "") {
        isemailvalidate = false;
        document.getElementById("emailError").innerHTML = "Please fill up field with your email";
        document.getElementById("emailError").style.color = "red";
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value) == false) {
        isemailvalidate = false;
        document.getElementById("emailError").innerHTML = "Invalid email, it must contain @ charactor.";
        document.getElementById("emailError").style.color = "red";
    } else {
        isemailvalidate = true;
        document.getElementById("emailError").innerHTML = "";
    }


    if (document.getElementById("passd").value == "") {
        ispassvalidate = false;
        document.getElementById("passdError").innerHTML = "Please provide your password."
        document.getElementById("passdError").style.color = "red";
    } else if (document.getElementById("passd").value.length < 8) {
        ispassvalidate = false;
        document.getElementById("passdError").innerHTML = "invalid password, it must have at list 8 charactors.";
        document.getElementById("passdError").style.color = "red";
    } else {
        ispassvalidate = true;
        document.getElementById("passd").innerHTML = "";
    }


    if (isemailvalidate == false || ispassvalidate == false) {
        return false;
    } else {
        return true;
    }
}