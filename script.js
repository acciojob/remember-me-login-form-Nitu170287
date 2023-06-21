//your JS code here. If required.
let submitBtn = document.getElementById("submit")
const inputCheck = document.getElementById("checkbox")
const inputUser = document.getElementById("username")
const inputPass =  document.getElementById("password")
let existBtn = document.getElementById("existing")
existBtn.style.display="none"


submitBtn.addEventListener("click",(event)=>{
	event.preventDefault();
	if(inputCheck.checked){
		localStorage.setItem("username",inputUser.value)
		localStorage.setItem("password",inputPass.value)
		existBtn.style.display="inline"
	}
	alert("Logged in as "+ inputUser.value) 
})

existBtn.addEventListener("click" ,(event)=>{
	event.preventDefault();
	alert("Logged in as "+ localStorage.getItem("username"))
})