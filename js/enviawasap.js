function copiarDatos(){

  var name = document.getElementById("name").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var consulta = document.getElementById("consulta").value;

  var texto = "Nombre: "+ name + " // Email: " + email + " // Telefono: " + telefono + " // Consulta: " + consulta;

  document.getElementById("textToEncode").innerHTML = texto;
  
  var url = "https://api.whatsapp.com/send?phone=5493782436096&text="+encodeURIComponent(texto);
						
  window.open(url);
}