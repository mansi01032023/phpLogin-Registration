// checking whether password and confirm password areequal on page load
$(document).ready(function () {
  $("#confirmPassword").keyup(function () {
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    if (password != confirmPassword) {
      $("#error").text("Password didn't match").css("color", "red");
    } else {
      $("#error").text("").css("color", "green");
    }
  });
});
// function for registering the user
$("#register").click(function () {
  let name = $("#name").val();
  let email = $("#email").val();
  let password = $("#password").val();
  let confirmPassword = $("#confirmPassword").val();
  if (name == "" || email == "" || password == "" || confirmPassword == "") {
    $("#error").html("No field must be empty!").css("color", "red");
  } else {
    $("#error").html("");
    $.ajax({
      url: "registration.php",
      type: "POST",
      data: {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
      datatype: JSON,
    }).done(function (result) {
      if (result) window.location = "login.php";
    });
  }
});
// function for signing in the user
$("#signin").click(function () {
  let emailLogin = $("#emailLogin").val();
  let passwordLogin = $("#passwordLogin").val();
  if (emailLogin == "" || passwordLogin == "") {
    $("#error").html("No field must be empty!").css("color", "red");
  } else {
    $("#error").html("");
    $.ajax({
      url: "checkUser.php",
      type: "POST",
      data: {
        emailLogin: emailLogin,
        passwordLogin: passwordLogin,
      },
    }).done(function (result) {
      if (result) {
        $("#container").html(result);
        $("#signin").hide();
        $("#emailLogin").hide();
        $("#passwordLogin").hide();
      } else {
        $("#error").html("Invalid User!").css("color", "red");
      }
    });
  }
});
// function to go to login page on clicking the login button
$("#login").click(function () {
  window.location = "login.php";
});
