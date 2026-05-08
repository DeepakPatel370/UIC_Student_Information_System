    // Logout function
    function logoutUser() {
      localStorage.removeItem("loggedInUser");
      alert("You have been logged out.");
      window.location.href = "login_select.html";
    }
