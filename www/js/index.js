function onSubmit() {
  var validate = document.forms["loginform"]["username"].value;
  var passvalidate = document.forms["loginform"]["password"].value;
  if (
    validate == "" ||
    validate == null ||
    passvalidate == "" ||
    passvalidate == null
  ) {
    document.getElementById("demo").innerHTML =
      "Please fill out all the fields";
  } else {
    console.log("user named " + validate + " loggedin");
    alert("Welcome " + validate + ". Press ok to redirect");
    window.location.href = "https://github.com/varad615";
  }
}

function signup() {
  console.log("welcome");
}
