document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent the default form submission

  // collect values (for now any values are accepted)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // simulate a "successful login"
  if (username && password) {
    // save username in localStorage (for display in index page)
    localStorage.setItem("loggedInUser", username);

    // redirect to index.html
    window.location.href = "index.html";
  } else {
    alert("Please enter both username and password.");
  }
});
