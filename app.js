// SalvaPrato — app.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    onSnapshot,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// TODO: substituir pelas credenciais reais
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

// teste de conexao
const q = query(colecaoOfertas, orderBy("criadoEm", "desc"));
onSnapshot(q, (snap) => {
    console.log("ofertas encontradas:", snap.docs.length);
});
