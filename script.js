function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = ""; //clearing errors 
  }
}
function seterror(id, error) {
  //setting error inside the tag of an id  
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true; //setting true value for a variable returnval
  clearErrors();

  //performing validation and if validation fails, setting the value of returnval to false
  var name = document.forms["regform"]["fname"].value;  //selecting the elements of HTML
  if (name.length < 5) {
    seterror("name", "*Length of name is too Short");   //if name has more than 25 letters, then showing the user , it is too long
    returnval = false;
  }

  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero!");    //if name has length zero, then tell user that it cannot be zero
    returnval = false;
  }

  let count = 0;
   for (char of name) {                     //initializing count=0 and taking it in loop
     if (char >= 0 || char <= 9) {
       count++;                              //if count!=0, 
     }
   }
   if (count != 0) {
     seterror("name", "*name should not contain numerical values!");     //phone number should not contain letters, 
     returnval = false;
   }

  // var age = document.forms["regform"]["fage"].value;    //if age is less than 18, then not valid age
  // if (age < 18) {
  //   seterror("age", "*Age must be greater than 18, otherwise, you cannot register!");
  //   returnval = false;
  // }

  var email = document.forms["regform"]["femail"].value;
  if (email.length > 25) {                                  //email validations are already set in html, also if lenth of email is more than 25 letters, tell the user to reenter 
    seterror("email", "*Email length is too long");
    returnval = false;
  }

  var phone = document.forms["regform"]["fphone"].value;
  if (phone.length != 10) {                                     //seterror("name", "*Length of name cannot be zero!");
    returnval = false;
    seterror("phone", "*Phone number should be of 10 digits!"); 
    returnval = false;
  }

  // let count = 0;
  // for (char of phone) {                     //initializing count=0 and taking it in loop
  //   if (char >= "a" || char <= "z") {
  //     count++;                              //if count!=0, 
  //   }
  // }
  // if (count != 0) {
  //   seterror("phone", "*Phone number should not contain letters!");     //phone number should not contain letters, 
  //   returnval = false;
  // }

  var user = document.forms["regform"]["fuser"].value;
  if (user.length < 6) {
    seterror("user", "*username must be of 6 characters!");             //username must be 6 characters
    returnval = false;
  }

  var password = document.forms["regform"]["fpass"].value;
  if (password.length < 8) {
    seterror("pass", "*Password should be atleast 8 characters long!");    //password should be at least 6 charaters
    returnval = false;
  }
  let letter = 0;
  let num = 0;

  for (char of password) {
    if (char >= "a" && char <= "z") {
      letter++;                                 //password should contain both letters and numbers 
    }
    if (char >= 0 && char <= 9) {
      num++;
    }
  }
  if (letter == 0 || num == 0) {
    seterror(
      "pass",
      "*Password should contain at least 1 number and 1 letter!"
    );
    returnval = false;
  }

  var cpassword = document.forms["regform"]["fcpass"].value;
  if (cpassword != password) {                      //both password and confirm passwords should match
    seterror("cpass", "*Password and Confirm password should match!");
    returnval = false;
  }

  return returnval;
}
