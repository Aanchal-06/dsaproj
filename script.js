document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userDisplay = document.getElementById("userDisplay");
  const errorMessage = document.getElementById("errorMessage");

  // ---- LOGIN PAGE ----
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
      }

      // For now, accept any credentials (for demo/testing)
      localStorage.setItem("username", username);
      window.location.href = "index.html";
    });
  }

  // ---- DASHBOARD & MODULE PAGES ----
  if (userDisplay) {
    const username = localStorage.getItem("username");

    if (!username) {
      // If not logged in, redirect to login
      window.location.href = "login.html";
    } else {
      userDisplay.textContent = `Welcome, ${username}`;
    }
  }

  // ---- LOGOUT BUTTON ----
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("username");
      window.location.href = "login.html";
    });
  }
});
