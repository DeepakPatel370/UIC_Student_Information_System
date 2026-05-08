  function registerStaff(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const staffid = document.getElementById("staffid").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const designation = document.getElementById("designation").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validation
    if (!name || !staffid || !email || !department || !designation || !phone || !password) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address!");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("📞 Please enter a valid 10-digit mobile number!");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Save to localStorage (simulate database)
    let staffList = JSON.parse(localStorage.getItem("staffList")) || [];
    const existing = staffList.find(staff => staff.email === email);

    if (existing) {
      alert("⚠️ This email is already registered!");
      return;
    }

    staffList.push({
      staffid,
      fullname: name,
      email,
      department,
      designation,
      phone,
      password
    });

    localStorage.setItem("staffList", JSON.stringify(staffList));

    alert("✅ Staff registration successful!");
    window.location.href = "staff_login.html"; // redirect to staff login
  }
