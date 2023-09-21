
function validate(){
    var isemailValid1=true;
    var ispasswordValid1=true;
    var isfNameValid=true;
    var islNameValid=true;
    

    if(document.getElementById("fname").value==""){
        isfNameValid=false;
        document.getElementById("fnameError").innerHTML="Please fill out the first name";
        document.getElementById("fnameError").style.color="red";
    }else if(/^[A-Za-z]+$/.test(document.getElementById("fname").value)==false){
        isfNameValid=false;
        document.getElementById("fnameError").innerHTML="The name must be of characters only";
        document.getElementById("fnameError").style.color="red";
    }else{
        isfNameValid=true;
        document.getElementById("fnameError").innerHTML="";
    }



    if(document.getElementById("lname").value==""){
        islNameValid=false;
        document.getElementById("lnameError").innerHTML="Please fill out the last name"
        document.getElementById("lnameError").style.color="red"

    }
    else if(/^[A-Za-z]+$/.test(document.getElementById("lname").value)==false){
        islNameValid=false;
        document.getElementById("lnameError").innerHTML="The name must be of characters"
        document.getElementById("lnameError").style.color="red"

    }else{
        islNameValid=true;
        document.getElementById("lnameError").innerHTML="";
    }

    if(document.getElementById("email").value==""){
        isemailValid1=false;
        document.getElementById("emailError").innerHTML="Please Enter Email";
        document.getElementById("emailError").style.color="red";
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value)==false){
        isemailValid1=false;
        document.getElementById("emailError").innerHTML="Please Enter valid Email. Its must contain @charactor";
        document.getElementById("emailError").style.color="red";
    }else{
        isemailValid1=true;
        document.getElementById("emailError").innerHTML="";
       
    }

    if(document.getElementById("pass").value==""){
        ispasswordValid1=false;
        document.getElementById("passError").innerHTML="Please Enter your password";
        document.getElementById("passError").style.color="red";
    }else if(document.getElementById("pass").value.length <8){
        ispasswordValid1=false;
        document.getElementById("passError").innerHTML="Invalid password it must have at least 8charactors";
        document.getElementById("passError").style.color="red";

    }else{
        ispasswordValid1=true;
        document.getElementById("passError").innerHTML="";
       
    }

    if(isemailValid1==false||ispasswordValid1==false||isfNameValid==false||islNameValid==false){
        return false;
    }else{
        return true;
    }

}

