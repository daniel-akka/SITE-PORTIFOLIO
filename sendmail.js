function sendMail() {

    var nome = "<h1>" + document.getElementById('form-nome').value +  "</h1>"
    var email = "<b>Email: " + document.getElementById('form-email').value + "</b>"
    var telefone = "<b>Telefon: " + document.getElementById('form-telefone').value + "</b>"
    var link = "mailto:me@me.com"
             + "?cc=daniel_akka@hotmail.com" 
             + "&subject=" + encodeURIComponent(document.getElementById('form-assunto').value)
             + "&body=" 
             + nome
             + email
             + telefone
             + encodeURIComponent(document.getElementById('form-mensagem').value)
    ;

    window.location.href = link;
}