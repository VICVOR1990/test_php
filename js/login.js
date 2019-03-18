document.getElementById("form").onsubmit=function(){
	

	 var formdata =new FormData(document.getElementById('form'));

	fetch('login.php',{
		 method: "POST",
    body: formdata
	}).then(function(response) {
  return response.json();
}).then(function(myJson) {
  

  console.log(myJson)
});

return false
}