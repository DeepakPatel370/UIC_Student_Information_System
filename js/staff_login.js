  function validateLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
      alert("⚠️ Please enter both email and password.");
      return;
    }

    let staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    const user = staffList.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInStaff", JSON.stringify(user));
      alert(`✅ Welcome, ${user.fullname}!`);
      window.location.href = "uic.html"; // redirect to dashboard/home
    } else {
      alert("❌ Invalid credentials. Please try again or register first.");
    }
  }
