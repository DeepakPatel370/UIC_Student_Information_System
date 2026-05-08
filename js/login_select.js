function chooseLogin(type) {
  if (type === "staff") {
    window.location.href = "staff_login.html"; // staff login page
  } else if (type === "student") {
    window.location.href = "student_login.html"; // student login page
  }
}
