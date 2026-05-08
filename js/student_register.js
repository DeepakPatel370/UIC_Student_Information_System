function registerUser(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmpassword = document
    .getElementById("confirmpassword")
    .value.trim();

  const mobile = document.getElementById("mobile").value.trim();
  const altmobile = document.getElementById("altmobile").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const dob = document.getElementById("dob").value;
  const course = document.getElementById("course").value;
  const semester = document.getElementById("semester").value.trim();

  if (!fullname || !email || !password || !confirmpassword) {
    alert("⚠️ Please fill all required fields!");
    return;
  }

  if (!/^[A-Za-z]+(\s[A-Za-z]+)+$/.test(fullname)) {
    alert(
      "🧾 Please enter your full name with at least first and last name (e.g., Deep Kumar).",
    );
    return;
  }

  // ✅ Email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address!");
    return;
  }

  // ✅ Indian mobile number validation
  if (mobile && !/^[6-9]\d{9}$/.test(mobile)) {
    alert(
      "📱 Please enter a valid 10-digit Indian mobile number (starting with 6-9)!",
    );
    return;
  }

  if (altmobile && !/^[6-9]\d{9}$/.test(altmobile)) {
    alert(
      "📞 Please enter a valid 10-digit Indian alternate number (starting with 6-9)!",
    );
    return;
  }

  // ✅ Pincode (6 digits)
  if (pincode && !/^\d{6}$/.test(pincode)) {
    alert("📮 Please enter a valid 6-digit Indian pincode!");
    return;
  }

  // ✅ Password check
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordPattern.test(password)) {
    alert(
      "🔐 Password must be at least 6 characters long and include a number and special character!",
    );
    return;
  }

  if (password !== confirmpassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  // ✅ Date of birth check
  if (dob) {
    const birthDate = new Date(dob);
    if (birthDate >= new Date()) {
      alert("📅 Please enter a valid date of birth!");
      return;
    }
  }

  // ✅ Course & semester validation
  if (!course) {
    alert("🎓 Please select a course!");
    return;
  }

  if (semester && (semester < 1 || semester > 8)) {
    alert("📘 Semester must be between 1 and 8!");
    return;
  }

  // Save to localStorage
  const studentData = {
    fullname,
    email,
    password,
    mobile,
    altmobile,
    pincode,
    dob,
    course,
    semester,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((u) => u.email === email)) {
    alert("⚠️ This email is already registered!");
    return;
  }

  users.push(studentData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Registration successful! Please login now.");
  window.location.href = "staff_login.html";
}

// Set maximum date for DOB (today)
window.addEventListener("DOMContentLoaded", () => {
  const dobElem = document.getElementById("dob");
  if (dobElem) {
    const today = new Date().toISOString().split("T")[0];
    dobElem.setAttribute("max", today);
  }
});
