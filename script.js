console.log('====================================');
console.log("Connected");
console.log('====================================');
let addtocart=document.getElementById("addtocart");
let message=document.getElementById("confirmation-message");


addtocart.addEventListener("click", function(){
    message.style.display="block";
});