// SalvaPrato — app.js

window.mostrarView = function (nomeView) {
    document.getElementById("view-vitrine").classList.add("hidden");
    document.getElementById("view-cadastro").classList.add("hidden");

    document.getElementById("view-" + nomeView).classList.remove("hidden");

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("aba-ativa");
        btn.classList.add("aba-inativa");
    });

    const abaAtiva = document.getElementById("tab-" + nomeView);
    abaAtiva.classList.remove("aba-inativa");
    abaAtiva.classList.add("aba-ativa");
};
