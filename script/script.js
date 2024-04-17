function verificarEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //válida o fomrato básico de um e-mail

    if (emailRegex.test(email)) {
        window.location.href = `final.html?email=${email}`;
    } else {
        document.getElementById("demo").innerHTML = "Valid email required";
        document.getElementById("email").classList.add("error");
    }
}

function url() {
    
    var url_atual = new URL(window.location.href);
    var emailValue = url_atual.searchParams.get('email');
    document.getElementById("email").innerHTML = emailValue;
    document.getElementById("email").classList.add("email");
}

window.onload = url;