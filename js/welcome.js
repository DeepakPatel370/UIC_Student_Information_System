// Show welcome message
const userEmail = localStorage.getItem("loggedInUser");
const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = users.find((u) => u.email === userEmail);
if (currentUser) {
  document.getElementById("welcomeMsg").innerText =
    "Welcome, " + currentUser.fullname + " 👋";
}
