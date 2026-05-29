# 🥗 Off Foods

> Plataforma web para redução do desperdício alimentar em comércios locais.

**Off Foods** conecta padarias, mercadinhos e pequenos comércios que possuem alimentos excedentes ao final do dia com moradores da região que buscam economizar. Sem app para instalar, sem cadastro obrigatório, sem taxa — apenas uma vitrine simples e reserva via WhatsApp.

---

## Funcionalidades

- **Vitrine de Ofertas** — feed em tempo real com cards de produtos disponíveis com desconto
- **Reserva via WhatsApp** — um clique gera uma mensagem pré-formatada para o comerciante
- **Publicação de Oferta** — formulário simples para comerciantes cadastrarem produtos excedentes
- **Atualização em tempo real** — Firebase Firestore sincroniza a vitrine instantaneamente

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (Vanilla ES6+) |
| Estilo | Tailwind CSS (via CDN) |
| Banco de dados | Firebase Firestore (NoSQL em nuvem) |
| Versionamento | Git + GitHub |

---

## Como Executar

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Servidor HTTP local (qualquer um dos abaixo)
- Projeto Firebase configurado (gratuito)

### Passo 1 — Clone o repositório
```bash
git clone https://github.com/GabrielTruber/Off Foods.git
cd Off Foods
```

### Passo 2 — Configure o Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Crie um projeto → adicione um app Web (`</>`)
3. Copie o objeto `firebaseConfig` gerado
4. Abra `app.js` e substitua os valores na seção marcada com `🔥 CONFIGURAÇÃO DO FIREBASE`

```javascript
const firebaseConfig = {
    apiKey:            "SUA_API_KEY",
    authDomain:        "SEU_PROJETO.firebaseapp.com",
    projectId:         "SEU_PROJECT_ID",
    storageBucket:     "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId:             "SEU_APP_ID"
};
```

5. No Firebase Console → **Firestore Database** → **Criar banco de dados** → **Modo de teste** → região `southamerica-east1`

> A coleção `ofertas` é criada automaticamente ao publicar a primeira oferta.

### Passo 3 — Sirva os arquivos localmente

**Opção A — Node.js:**
```bash
npx serve .
```

**Opção B — VS Code:**
Instale a extensão **Live Server** → clique com botão direito em `index.html` → *Open with Live Server*

**Opção C — Python:**
```bash
python -m http.server 3000
```

Acesse `http://localhost:3000` no navegador.

---

## Estrutura do Projeto

```
Off Foods/
├── index.html    ← Estrutura HTML: cabeçalho, abas, vitrine e formulário
├── style.css     ← Estilos: cards, spinner, formulário, botão WhatsApp
└── app.js        ← Lógica: Firebase, renderização, WhatsApp, validação
```

---

## Como Usar

### Como comerciante
1. Clique na aba **"➕ Publicar Oferta"**
2. Preencha: nome do comércio, WhatsApp, título da oferta e preços
3. Clique em **"Publicar Oferta"** — a oferta aparece na vitrine imediatamente

### Como consumidor
1. Acesse a aba **"🛍 Ofertas"**
2. Navegue pelos cards disponíveis
3. Clique em **"Reservar no WhatsApp"** — o app abre o WhatsApp com mensagem pronta

---

## Banco de Dados — Estrutura Firestore

```
Coleção: ofertas
└── [ID automático]
    ├── nomeCom        : string    → Nome do comércio
    ├── whatsapp       : string    → Número com código do país (ex: 5548999991234)
    ├── titulo         : string    → Título da oferta
    ├── precoOriginal  : number    → Preço original em reais
    ├── precoDesconto  : number    → Preço com desconto em reais
    └── criadoEm       : timestamp → Gerado automaticamente pelo servidor
```

---

## Projeto Acadêmico

Desenvolvido como MVP para o trabalho final da disciplina de **Análise e Desenvolvimento de Sistemas** — UNIVALI.

**Autor:** Gabriel Alves Truber  
**Curso:** Análise e Desenvolvimento de Sistemas — Universidade do Vale do Itajaí
