validForm = () => {
    let email, password;
    email = document.myform.email.value;
    password = document.myform.password.value;


    let user_records = new Array()
    user_records = JSON.parse(localStorage.getItem("users")) || []
    console.log(user_records)


    if (user_records.some((v) => { return v.email == email && v.password == password })) {
        alert(email + "\n Welcome To The Journy");
        window.location.href = "./last.html";
        return false;
    }
     else if (user_records.some((v) => { return v.email != email })) {
        alert("***user is not registerd.");
        return false;
    } 
    else if (user_records.some((v) => { return v.email == email && v.password != password })) {
        alert("***please enter the valid password");
        return false;
    }
     else {
        return true;
    }
}