// <----------fetching inputs---------------------->

//fetching from local storage----------------------->
let firstname=localStorage.getItem("firstname")
let lastname=localStorage.getItem("lastname")
let mobileNumber= localStorage.getItem("mobilenumber")
let country= localStorage.getItem("country")
let state=  localStorage.getItem("state")
let city=localStorage.getItem("city")
let village= localStorage.getItem("village")


// fetching button and form section------------------------->
let form_container=document.getElementById("detail_form")
let  card_container=document.querySelector("section")
let submit_btn=document.querySelector("button");



if(firstname==null || lastname==null){
    displayForm();
}else{
    displayCard();

}

function displayForm(){
form_container.classList.remove("hidden")
}


function displayCard(){
document.getElementById("fname").innerText=firstname
document.getElementById("lname").innerText= lastname

document.getElementById("mobile").innerText=mobileNumber
document.getElementById("YourCountry").innerText=country
document.getElementById("yourState").innerText=state
document.getElementById("yourCity").innerText=city
document.getElementById("yourVillage").innerText=village
card_container.classList.remove("hidden");
form_container.classList.add("hidden")

    
}

submit_btn.addEventListener("click",(e)=>{
    e.stopPropagation
    localStorage.setItem("firstname",document.querySelector("#firstname").value)
localStorage.setItem("lastname",document.querySelector("#lastname").value)
localStorage.setItem("country",document.querySelector("#country").value)
localStorage.setItem("state",document.querySelector("#state").value)
localStorage.setItem("city",document.querySelector("#city").value)
localStorage.setItem("village",document.querySelector("#village").value)
   localStorage.setItem("mobilenumber",document.querySelector("#mobileNumber").value )
   displayCard();
})









