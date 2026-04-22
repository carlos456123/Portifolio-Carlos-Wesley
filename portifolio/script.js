function toggleMenu(){
  document.querySelector(".menu").classList.toggle("show");
}

function validarForm(event){
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  if(nome === "" || email === "" || msg === ""){
    alert("Preencha todos os campos!");
  } else {
    alert("Mensagem enviada!");
  }
}