// Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo(a) à FARM! Aproveite nossa coleção.");
};

// Validação do formulário
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const mensagem = document.querySelector("textarea").value;

    if (nome === "" || email === "" || mensagem === "") {
        event.preventDefault();
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});

// Botão "Voltar ao topo"
const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "↑";
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "green";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mostrar data atual no rodapé
const footer = document.querySelector("footer");
const data = new Date();

footer.innerHTML += `<p>Data: ${data.toLocaleDateString("pt-BR")}</p>`;

// Alterar cor da Navbar ao rolar a página
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.remove("bg-success");
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
        navbar.classList.add("bg-success");
    }
});
