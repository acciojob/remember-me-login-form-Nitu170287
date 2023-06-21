//your JS code here. If required.
const submitBtn = document.getElementById("submit")
const inputCheck = document.getElementById("checkbox")
const inputUser = document.getElementById("username")
const inputPass =  document.getElementById("password")
const existBtn = document.getElementById("existing")
existBtn.style.display="none"


submitBtn.addEventListener("click",(event)=>{
	
	if(inputCheck.checked){
		localStorage.setItem("username",inputUser.value)
		localStorage.setItem("password",inputPass.value)
		existBtn.style.display="inline"
	}
	alert("Logged in as "+ inputUser.value) 
})

existBtn.addEventListener("click" ,()=>{
	alert("Logged in as "+ inputUser.value)
})