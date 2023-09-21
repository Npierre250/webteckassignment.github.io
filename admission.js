

function validateAddmission(){
    var  isnameValid=true;
   var isNationalidValid=true;
   var iscountryValid=true;
  var isphoneNumberValid=true;
  var isdobValid=true;
  var isemailValid=true
  var isgenderValid=true;
  var isfacultyValid=true;
  var isqualificationValid=true;
  var isdiplomaUploaded=true;
  var ispictureUploaded=true;
  
    if(document.getElementById("name").value==""){
      isnameValid=false;
      document.getElementById("nameError").innerHTML="Please Enter your names";
      document.getElementById("nameError").style.color="red";
    }else if(/^[a-z\d]+$/i.test(document.getElementById("name").value)==false){
        isnameValid=false;
      document.getElementById("nameError").innerHTML="Please Enter valid names";
      document.getElementById("nameError").style.color="red";
      }else{
          
      isnameValid=true;
      document.getElementById("nameError").innerHTML="";
    }
  
    
    if(document.getElementById("Id").value==""){
      isNationalidValid=false;
      document.getElementById("IdError").innerHTML="Please Enter your National Id";
      document.getElementById("IdError").style.color="red";
    }else{
      isNationalidValid=true;
      document.getElementById("IdError").innerHTML="";
    }
  
    if(document.getElementById("country").value==""){
      iscountryValid=false;
      document.getElementById("countryError").innerHTML="Please Enter your Country name";
      document.getElementById("countryError").style.color="red";
    }else{
      iscountryValid=true;
      document.getElementById("countryError").innerHTML="";
    }
  
    if(document.getElementById("phone").value==""){
      isphoneNumberValid=false;
      document.getElementById("phoneError").innerHTML="Please Enter your Phone number";
      document.getElementById("phoneError").style.color="red";
    }else if(document.getElementById("phone").value===9){
      
      isphoneNumberValid=false;
      document.getElementById("phoneError").innerHTML="Invalid Phone number";
      document.getElementById("phoneError").style.color="red";
  
    }else if( /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(document.getElementById("phone").value)==false){
  
      isphoneNumberValid=false;
      document.getElementById("phoneError").innerHTML="Invalid Phone number";
      document.getElementById("phoneError").style.color="red";
  
      }else{
      isphoneNumberValid=true;
      document.getElementById("phoneError").innerHTML="";
    }
  
  if(document.getElementById("dateofbirth").value==""){
      isdobValid=false;
      document.getElementById("dobError").innerHTML="Please Enter your Date of birth";
      document.getElementById("dobError").style.color="red";
    }else{
      isdobValid=true;
      document.getElementById("dobError").innerHTML="";
    }
    
    if(document.getElementById("emailtxt").value==""){
      isemailValid=false;
      document.getElementById("emailtxtError").innerHTML="Please Enter your Email";
      document.getElementById("emailtxtError").style.color="red";
    }else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("emailtxt").value)==false){
  
      isemailValid=false;
      document.getElementById("emailtxtError").innerHTML="Invalid Email, it must have @character";
      document.getElementById("emailtxtError").style.color="red";
    }else{
      isemailValid=true;
      document.getElementById("emailtxtError").innerHTML="";
    }
  
  
    if(document.getElementById("gendertxt").value==-1){
      isgenderValid=false;
      document.getElementById("gendertxtError").innerHTML="Please select your gender";
      document.getElementById("gendertxtError").style.color="red";
    }else{
      isgenderValid=true;
      document.getElementById("gendertxtError").innerHTML="";
    }
  
    if(document.getElementById("facultytxt").value==-1){
      isfacultyValid=false;
      document.getElementById("facultytxtError").innerHTML="Please select your Faculty";
      document.getElementById("facultytxtError").style.color="red";
    }else{
      isfacultyValid=true;
      document.getElementById("facultytxtError").innerHTML="";
    }
  
    if(document.getElementById("qualificationtxt").value==-1){
      isqualificationValid=false;
      document.getElementById("qualificationtxtError").innerHTML="Please select your current qualification";
      document.getElementById("qualificationtxtError").style.color="red";
    }else{
      isqualificationValid=true;
      document.getElementById("qualificationtxtError").innerHTML="";
    }
  
  
    if(document.getElementById("departmenttxt").value==-1){
      isqualificationValid=false;
      document.getElementById("departmenttxtError").innerHTML="Please select your Department";
      document.getElementById("departmenttxtError").style.color="red";
    }else{
      isqualificationValid=true;
      document.getElementById("departmenttxtError").innerHTML="";
    }
  
    if(document.getElementById("file").value==""){
      ispictureUploaded=false;
      document.getElementById("fileError").innerHTML="Please upload your profile picture";
      document.getElementById("fileError").style.color="red";
    }else{
      ispictureUploaded=true;
      document.getElementById("fileError").innerHTML="";
    }
  
  
    if(document.getElementById("diplomadoc").value==""){
      isdiplomaUploaded=false;
      document.getElementById("diplomaError").innerHTML="Please upload your Diploma file";
      document.getElementById("diplomaError").style.color="red";
    }else{
      isdiplomaUploaded=true;
      document.getElementById("diplomaError").innerHTML="";
    }
  
  
  
  
  
    if(isnameValid == false||isNationalidValid == false||ispictureUploaded==false||iscountryValid==false||isdobValid==false ||isemailValid==false||isphoneNumberValid==false||isqualificationValid==false||isfacultyValid==false||isgenderValid==false||isqualificationValid==false ||isphoneNumberValid==false ||ispictureUploaded==false||isdiplomaUploaded==false){
      return false;
    }else{
      return true;
    }
  }
  
  
  
  const image_input=document.querySelector("#picture");
  var upload_image="";
  
  image_input.addEventListener("change",function(){
      const reader=new FileReader();
      reader.addEventListener("load",() => {    
     upload_image=reader.result;
     console.log(upload_image)
     document.querySelector("#display_image").backgroundImage=`url(${upload_image})`;
      });
     reader.readAsDataURL(this.files[0])
  });
  