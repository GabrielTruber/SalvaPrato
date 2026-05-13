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
    return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function calcularDesconto(original, desconto) {
    if (!original || original <= 0) return null;
    const pct = Math.round(((original - desconto) / original) * 100);
    return pct > 0 ? pct : null;
}

function gerarLinkWhatsApp(telefone, titulo, precoDesconto) {
    const numero = telefone.replace(/\D/g, "");
    const mensagem =
        `Olá! Vi a oferta *${titulo}* por ${formatarBRL(precoDesconto)} no SalvaPrato e gostaria de reservar! 🥗`;
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = String(texto);
    return div.innerHTML;
}

function emojiAleatorio() {
    return EMOJIS_ALIMENTO[Math.floor(Math.random() * EMOJIS_ALIMENTO.length)];
}


function criarCardHTML(oferta) {
    const { id, nomeCom, whatsapp, titulo, precoOriginal, precoDesconto } = oferta;

    const emoji   = emojiAleatorio();
    const pct     = calcularDesconto(precoOriginal, precoDesconto);
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
                <a href="${linkWpp}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="btn-whatsapp"
                   aria-label="Reservar ${escaparHTML(titulo)} pelo WhatsApp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Reservar no WhatsApp
                </a>
            </div>
        </article>
    `;
}


const consultaOfertas = query(colecaoOfertas, orderBy("criadoEm", "desc"));

onSnapshot(
    consultaOfertas,
    (snapshot) => {
        const elCarregando = document.getElementById("estado-carregando");
        const elVazio      = document.getElementById("estado-vazio");
        const elGrid       = document.getElementById("grid-ofertas");

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
    },
    (erro) => {
        console.error("Erro ao carregar ofertas:", erro);
        document.getElementById("estado-carregando").innerHTML = `
            <span class="text-5xl">⚠️</span>
            <p class="text-sm text-red-500 mt-3 text-center px-4">
                Erro ao carregar. Verifique se as credenciais do Firebase estão corretas.
            </p>
        `;
    }
);


document.getElementById("formulario-oferta").addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const btnPublicar = document.getElementById("btn-publicar");

    const nomeCom       = document.getElementById("nome-comercio").value.trim();
    const whatsapp      = document.getElementById("whatsapp").value.trim().replace(/\D/g, "");
    const titulo        = document.getElementById("titulo").value.trim();
    const precoOriginal = parseFloat(document.getElementById("preco-original").value);
    const precoDesconto = parseFloat(document.getElementById("preco-desconto").value);

    if (whatsapp.length < 10 || whatsapp.length > 15) {
        alert("Número de WhatsApp inválido.\nUse: código do país (55) + DDD + número.\nExemplo: 5548999991234");
        return;
    }

    if (precoDesconto >= precoOriginal) {
        alert("O preço com desconto deve ser menor que o preço original.");
        return;
    }

    btnPublicar.disabled = true;
    btnPublicar.textContent = "Publicando...";

    try {
        await addDoc(colecaoOfertas, {
            nomeCom,
            whatsapp,
            titulo,
            precoOriginal,
            precoDesconto,
            criadoEm: serverTimestamp()
        });

        evento.target.reset();

        const msgSucesso = document.getElementById("msg-sucesso");
        msgSucesso.classList.remove("hidden");
        setTimeout(() => msgSucesso.classList.add("hidden"), 4000);

        setTimeout(() => mostrarView("vitrine"), 1500);

    } catch (erro) {
        console.error("Erro ao publicar oferta:", erro);
        alert("Não foi possível publicar a oferta.\nVerifique sua conexão e as configurações do Firebase.");
    } finally {
        btnPublicar.disabled = false;
        btnPublicar.textContent = "🚀 Publicar Oferta";
    }
});
