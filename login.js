var  isemailvalid=true;
var ispassvalid=true;

function validation(){
    if(document.getElementById("emailtxt").value==""){
        isemailvalid=false;
        document.getElementById("userError").innerHTML="Please fill up field with your email";
        document.getElementById("userError").style.color="red";
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("emailtxt").value)==false){
        isemailvalid=false;
        document.getElementById("userError").innerHTML="Invalid email, it must contain @ charactor.";
        document.getElementById("userError").style.color="red";
    }else{
        isemailvalid=true;
        document.getElementById("userError").innerHTML="";
    }
    
   
    if(document.getElementById("pass").value==""){
        ispassvalid=false;
        document.getElementById("passError").innerHTML="Please provide your password."
        document.getElementById("passError").style.color="red";
    }else if(document.getElementById("pass").value.length < 8){
        ispassvalid=false;
        document.getElementById("passError").innerHTML="invalid password, it must have at list 8 charactors.";
        document.getElementById("passError").style.color="red";
    }else{
        ispassvalid=true;
        document.getElementById("passError").innerHTML="";
    }


    if(isemailvalid==false||ispassvalid==false){
        return false;
    }else{
       window.location.href="signup.html";
        return true;
    }
}

