    // 🔍 Search functionality
    document.getElementById("searchBox").addEventListener("keyup", function() {
      let filter = this.value.toLowerCase();
      let rows = document.querySelectorAll("#studentTable tbody tr");
      
      rows.forEach(row => {
        let name = row.cells[1].textContent.toLowerCase();
        let uid = row.cells[2].textContent.toLowerCase();

        if (name.includes(filter) || uid.includes(filter)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
