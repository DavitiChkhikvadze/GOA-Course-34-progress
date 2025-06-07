function signUp() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("enter all inputs u ni");
    return;
  }

  if (localStorage.getItem("username")) {
    alert("this already exists u little ni");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("registration successful");
  location.reload();
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("entry successful");
    showWelcome(username);
  } else {
    alert("nga u dumb? its incorrect");
  }
}

