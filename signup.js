



submitForm = () => {
    let fname,lname,username,email,gender,password,Cpassword;
 fname = document.myform.Fname.value;
 lname = document.myform.lname.value;
 email = document.myform.email.value;
 gender = document.myform.gender.value;
 password = document.myform.password.value;
 Cpassword = document.myform.Cpassword.value;
 let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (fname == null || fname == "" || fname == undefined) {
   alert("please enter the name")
   return false;
} else if (lname == null || lname == "" || lname == undefined) {
    alert("please enter the Lastname")
    return false;
} else  if (email == null || email == "" || email == undefined) {
    alert( "Please Enter Your Email Address") 
    return false;

} else if (!email.match(mailformat)) {
    alert("Please Enter Your Valid Email Address") 
    return false;

}  else if (password == null || password == ""  || password == undefined) {
    alert("Please Enter Your Password") 
    return false;

}
 else if (Cpassword == null || Cpassword == "" || password != Cpassword) {
        alert("password does not match")
        return false;

    }else {

    let fname,lname,email,gender,password,Cpassword;
 fname = document.myform.Fname.value
 lname = document.myform.lname.value
 email = document.myform.email.value
 gender = document.myform.gender.value
 password = document.myform.password.value
 Cpassword = document.myform.Cpassword.value

 let user_records = new Array();
 user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
 if (user_records.some((v) => { return v.email == email })) {
    alert(email + " is already register.")
    return false;
    
} else{

    user_records.push({
       "fname" : fname,
       "lname" : lname,
       "email": email,
       "gender" : gender,
       "password" : password,
       "Cpassword" : Cpassword
    })
}

    localStorage.setItem("users", JSON.stringify(user_records))
    alert(email + "Thanks for registration. \n try to login now")   
    console.log("login")
    window.location.href = "signin.html";       

}
return true;
}