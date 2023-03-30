function validate(){
    var fname=document.getElementById("FirstName").value;
    var lname=document.getElementById("LastName").value;
    var email=document.getElementById("Email").value;
    var message=document.getElementById("Message").value;

    var msg1=document.getElementById('msg1')

    //check name is not empty
    if(fname==""){
        msg1.innerHTML="Enter your name"
        setTimeout(function() {
            msg1.innerHTML=""
        }, 5000);
        return false;
    }
    // check name has number
    if(/\d/.test(fname)){
        msg1.innerHTML="Name must be character"
        setTimeout(function(){
            msg1.innerHTML=""
        },5000);
        return false;
    }
    if(lname==""){
        msg1.innerHTML="Enter your name"
        setTimeout(function() {
            msg1.innerHTML=""
        }, 5000);
        return false;
    }
    //check name has number
    if(/\d/.test(lname)){
        msg1.innerHTML="Name must be character"
        setTimeout(function(){
            msg1.innerHTML=""
        },5000);
        return false;
    }
    var emailRegex= /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(!emailRegex.test(email)){
        msg1.innerHTML="Enter a valid Email Id"
        setTimeout(function(){
            msg1.innerHTML=""
        },5000);
        return false;
    }
    if(message==""){
        msg1.innerHTML="Message must be filled out"
        setTimeout(function(){
            msg1.innerHTML=""
        },5000);
        return false;
    }
    return true;

}