// main.js

// Agendamento
document.getElementById('agendamento').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Agendamento enviado! Entraremos em contato em breve.');
});

// Formulário de contato
document.getElementById('contato-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
