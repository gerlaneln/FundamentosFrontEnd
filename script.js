window.onload = () => {

    let botoes = document.querySelectorAll("button.excluir");
    botoes.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.parentNode.remove();
        });
    });

    let alertas = document.querySelectorAll("div.alerta span");
    alertas.forEach(item => {
        item.addEventListener('click', ()=>{
            item.parentNode.style.visibility = "hidden";
        });
    });

    let botaoCarregar = document.querySelector("button#load");
    let tabela = document.querySelector("table");
    let xhr = new XMLHttpRequest();
    if (botaoCarregar) {
        botaoCarregar.addEventListener("click", () => {
            console.log("passei aqui")
            let url = "https://raw.githubusercontent.com/danielnsilva/webacademyufac/main/usuarios.json"
            fetch(url)
                .then(response => response.json())
                .then(dados => {
                    for (let item in dados) {
                        let linha = document.createElement("tr");
                        let id = document.createElement("td");
                        let nome = document.createElement("td");
                        let usuario = document.createElement("td");
                        let ativo = document.createElement("td");
                        let papel = document.createElement("td");
                        let acoes = document.createElement("td");
                        id.classList.add("fit");
                        id.textContent = dados[item].id;
                        nome.textContent = dados[item].nomeCompleto;
                        usuario.textContent = dados[item].nomeUsuario;
                        ativo.textContent = dados[item].ativo;
                        papel.textContent = dados[item].papel;
                        acoes.innerHTML = "<button type='button'>Editar</button>"+
                                          "<button type='button' class='excluir'>Excluir</button>"
                        linha.appendChild(id);
                        linha.appendChild(nome);
                        linha.appendChild(usuario);
                        linha.appendChild(ativo);
                        linha.appendChild(papel);
                        linha.appendChild(acoes);
                        tabela.tBodies[0].appendChild(linha);
                    }
                })
            // xhr.open("GET", url);
            // xhr.addEventListener("readystatechange", () => {
            //     if (xhr.readyState == 4 && xhr.status == 200) {
            //         let dados = JSON.parse(xhr.responseText);
            //         for (let item in dados) {
            //             let linha = document.createElement("tr");
            //             let id = document.createElement("td");
            //             let nome = document.createElement("td");
            //             let usuario = document.createElement("td");
            //             let ativo = document.createElement("td");
            //             let papel = document.createElement("td");
            //             let acoes = document.createElement("td");
            //             id.classList.add("fit");
            //             id.textContent = dados[item].id;
            //             nome.textContent = dados[item].nomeCompleto;
            //             usuario.textContent = dados[item].nomeUsuario;
            //             ativo.textContent = dados[item].ativo;
            //             papel.textContent = dados[item].papel;
            //             acoes.innerHTML = "<button type='button'>Editar</button>"+
            //                               "<button type='button' class='excluir'>Excluir</button>"
            //             linha.appendChild(id);
            //             linha.appendChild(nome);
            //             linha.appendChild(usuario);
            //             linha.appendChild(ativo);
            //             linha.appendChild(papel);
            //             linha.appendChild(acoes);
            //             tabela.tBodies[0].appendChild(linha);
            //         }
            //     }
            // });
            // xhr.send();
        })
    }

    let themeAzul = document.getElementById("azul");
    themeAzul.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", "azul");
        localStorage.setItem("theme", "azul");
    });

    let themeVerde = document.getElementById("verde");
    themeVerde.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", "verde");
        localStorage.setItem("theme", "verde");
    });

    let themeLight = document.getElementById("light");
    themeLight.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    });

    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }




}