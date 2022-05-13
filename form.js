function validate() {
    if (document.form.yourname.value.length < 5) {
    alert("Please enter your full name.");
    return false;
    }
    if (document.form.youremail.value.length < 7) {
    alert("Please enter your email.");
    return false;
    }
    if (document.form.pass.value.length < 5) {
    alert("Please enter your password.");
    return false;
    }
    else(document.form)
    alert("Login Successful, Welcome to 3 in 1 Calculator")
return true;
}
