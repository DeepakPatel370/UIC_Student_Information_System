// Simple search function
const searchBox = document.getElementById("searchBox");
const profiles = document.querySelectorAll(".profile-card");

searchBox.addEventListener("keyup", function () {
  const query = this.value.toLowerCase();
  profiles.forEach((profile) => {
    const name = profile.querySelector("h3").textContent.toLowerCase();
    const uid = profile.querySelector("p").textContent.toLowerCase();
    if (name.includes(query) || uid.includes(query)) {
      profile.style.display = "block";
    } else {
      profile.style.display = "none";
    }
  });
});
