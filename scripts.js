document.addEventListener("DOMContentLoaded", function () {
    var menu = document.getElementById("menu");
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var menuNav = document.querySelector(".menu-nav");
    var hamburguerBtn = document.getElementById("hamburguer-btn");

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll para baixo, esconde o menu
            menu.classList.add("esconder-menu");
        } else {
            // Scroll para cima, mostra o menu
            menu.classList.remove("esconder-menu");
        }

        lastScrollTop = scrollTop;
    });

    // Código do contador
    var dataCasamento = new Date("2024-01-13T00:11:00Z");

    function atualizarContador() {
        var agora = new Date();
        var diferenca = dataCasamento - agora;

        var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        // Formatando a exibição do contador
        var contadorElemento = document.getElementById("contador");
        contadorElemento.innerHTML = `Faltam ${dias - 1} dias | 13/01/2024 `;
    }

    // Atualizar o contador a cada segundo
    setInterval(atualizarContador, 1000);

    // Chame a função uma vez para exibir o contador imediatamente
    atualizarContador();

    hamburguerBtn.addEventListener("click", function () {
        menuNav.classList.toggle("active");
    });

    // Adicionar evento de clique para os itens do menu
    var menuItens = document.querySelectorAll(".menu-nav a");

    menuItens.forEach(function (item) {
        item.addEventListener("click", function () {
            // Fecha o menu removendo a classe "active"
            menuNav.classList.remove("active");
        });
    });
});
