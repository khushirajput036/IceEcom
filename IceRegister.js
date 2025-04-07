document.getElementById('registerForm').addEventListener('submit',function(e){
	e.preventDefault()
	const name = e.target.name.value.trim()
	const email =e.target.email.value.trim()
	const phone = e.target.phone.value.trim()
	const password = e.target.password.value.trim()
	const confirmPassword = e.target.confirmPassword.value.trim()

if(password !== confirmPassword){
	document.getElementById('confirmPassword').classList.add("is-invalid")
	return;
}

const user = {name,password,phone,email}
localStorage.setItem('user',JSON.stringify(user))
document.getElementById('successMsg').classList.remove('d-none')


setTimeout(()=>{
	window.location.href="IcecreamLogin.html"
},2000)
})
