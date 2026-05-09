// SalvaPrato — app.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey:            "COLE_AQUI_SUA_API_KEY",
    authDomain:        "COLE_AQUI.firebaseapp.com",
    projectId:         "COLE_AQUI_SEU_PROJECT_ID",
    storageBucket:     "COLE_AQUI.appspot.com",
    messagingSenderId: "COLE_AQUI_SENDER_ID",
    appId:             "COLE_AQUI_APP_ID"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const colecaoOfertas = collection(db, "ofertas");

const EMOJIS_ALIMENTO = ["🥖", "🥐", "🧁", "🍱", "🥗", "🥘", "🍞", "🧆", "🥙", "🍕", "🫔", "🥧"];

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

function formatarBRL(valor) {
    return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularDesconto(original, desconto) {
    if (!original || original <= 0) return null;
    const pct = Math.round(((original - desconto) / original) * 100);
    return pct > 0 ? pct : null;
}

function gerarLinkWhatsApp(telefone, titulo, precoDesconto) {
    const numero = telefone.replace(/\D/g, "");
    const mensagem = `Olá! Vi a oferta *${titulo}* por ${formatarBRL(precoDesconto)} no SalvaPrato e gostaria de reservar! 🥗`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = String(texto);
    return div.innerHTML;
}

function criarCardHTML(oferta) {
    const { id, nomeCom, whatsapp, titulo, precoOriginal, precoDesconto } = oferta;
    const emoji = EMOJIS_ALIMENTO[Math.floor(Math.random() * EMOJIS_ALIMENTO.length)];
    const pct = calcularDesconto(precoOriginal, precoDesconto);
    const linkWpp = gerarLinkWhatsApp(whatsapp, titulo, precoDesconto);

    return `
        <article class="card-oferta" data-id="${escaparHTML(id)}">
            <div class="card-imagem" aria-hidden="true">${emoji}</div>
            <div class="card-corpo">
                <p class="card-comercio">🏪 ${escaparHTML(nomeCom)}</p>
                <h3 class="card-titulo">${escaparHTML(titulo)}</h3>
                <div class="card-precos">
                    <span class="preco-original">${formatarBRL(precoOriginal)}</span>
                    <span class="preco-desconto">${formatarBRL(precoDesconto)}</span>
                    ${pct ? `<span class="badge-desconto">-${pct}% OFF</span>` : ""}
                </div>
                <a href="${linkWpp}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                    Reservar no WhatsApp
                </a>
            </div>
        </article>
    `;
}

const consultaOfertas = query(colecaoOfertas, orderBy("criadoEm", "desc"));
onSnapshot(consultaOfertas, (snapshot) => {
    const elCarregando = document.getElementById("estado-carregando");
    const elVazio = document.getElementById("estado-vazio");
    const elGrid = document.getElementById("grid-ofertas");

    elCarregando.classList.add("hidden");

    if (snapshot.empty) {
        elVazio.classList.remove("hidden");
        elVazio.classList.add("flex");
        elGrid.classList.add("hidden");
        return;
    }

    elVazio.classList.add("hidden");
    elVazio.classList.remove("flex");
    elGrid.classList.remove("hidden");

    const ofertas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    elGrid.innerHTML = ofertas.map(criarCardHTML).join("");
}, (erro) => {
    console.error("Erro ao carregar:", erro);
});
