function validationform(){
    var firstname=document.validateform.firstname.value;
    var lastname=document.validateform.lastname.value;
    var phonenumber=document.validateform.phonenumber.value;   
    var password=document.validateform.password.value;
    var confirmpassword=document.validateform.confirmpassword.value; 
    var email=document.validateform.email.value;
    if(firstname==null||firstname==""){
        alert("enter firstname")
        return false;
    }
    else if(lastname==null||lastname=="")
    {
        alert("enter lastname")
    return false;
}
    else if(phonenumber==null|| phonenumber==""){
        alert("enter phonenumber")
    return false;
}
else if(password==null||password==""){
    alert("enter password")
    return false;
}
else if(confirmpassword==null||confirmpassword==""){
    alert("passwords do not match")
    return false;
}

else if(email==null||email==""){
        alert("enter email")
        return false;
    }
    else if(!/^[a-zA-Z0-9,_%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/.test(email)){
        alert("Invalid email format");
        return false;
    }
    return true;
}


function validatedform() {
    var email = document.validate.email.value;
    var password = document.validate.password.value;

    if (email == null || email == "") {
        alert("Please enter your email");
        return false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Invalid email format");
        return false;
    }

    else if (password == null || password == "") {
        alert("Please enter your password");
        return false;
    }

    return true;
}