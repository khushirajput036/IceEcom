<script>
  document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userName = localStorage.getItem("loggedInUser");

    if (isLoggedIn === "true") {
      document.getElementById("loginNav")?.classList.add("d-none");
      document.getElementById("logoutNav")?.classList.remove("d-none");
    } else {
      document.getElementById("loginNav")?.classList.remove("d-none");
      document.getElementById("logoutNav")?.classList.add("d-none");
    }
  });

  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    window.location.href = "Icecream.html";
  }
</script>
