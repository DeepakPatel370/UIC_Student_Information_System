// Redirect if neither student nor staff is logged in
const loggedInUser = localStorage.getItem("loggedInUser");
const loggedInStaff = localStorage.getItem("loggedInStaff");

if (!loggedInUser && !loggedInStaff) {
  alert("⚠️ Please login first to access this page!");
  window.location.href = "login_select.html"; // or staff_login.html
}
