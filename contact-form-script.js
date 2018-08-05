function myFunction(event) {
  submitFunction(event);
}

function submitFunction(event) {
  if (event.isDefaultPrevented()) {
    // handle the invalid form...
    formError();
    submitMSG(false, "Did you fill in the form properly?");
  } else {
    // everything looks good!
    event.preventDefault();
    submitForm();
  }
}

function submitForm() {
  // Initiate Variables With Form Content
  if ($("#email").val()) {
    var email = $("#email").val();
  }
  $.ajax({
    type: "POST",
    url: "form-process.php",
    data:
      "email=" +
      email, 
    success: function(text) {
      if (text == "success") {
        formSuccess();
      } else {
        formError();
        submitMSG(false, text);
      }
    }
  });
}

function formSuccess() {
  submitMSG(true, "Thank You! A member of our team will contact you.");
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "alert alert-success";
  } else {
    var msgClasses = "alert alert-danger";
  }
  $("#msgSubmit")
    .removeClass()
    .addClass(msgClasses);
}
