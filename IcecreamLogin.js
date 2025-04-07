document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const email = e.target.email.value.trim();
  const password = e.target.password.value.trim();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password){
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", user.email); 

    document.getElementById('loginSuccess').classList.remove('d-none');
    document.getElementById('loginError').classList.add('d-none');

    setTimeout(() => {
      window.location.href = "Icecream.html";
    }, 2000);
  } else {
    document.getElementById('loginError').classList.remove('d-none');
  }
});
