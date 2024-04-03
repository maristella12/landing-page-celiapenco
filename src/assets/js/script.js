function handleEmailSubmission(event){
   event.preventDefault()
   var email = document.getElementById("emailInput").value


   fetch("src/assets/js/db.php", {
   method: "POST",
   body: new URLSearchParams({email: email}),
   headers: {
      "Content-Type": "application/x-www-form-urlencoded"
   }
}).then(response => {
   if(response.ok){
      document.getElementById("downloadButton").style.display = "block"
   } else {
      console.log("Email was not saved")
   }
}).catch(error => console.error("Error: ", error))

}