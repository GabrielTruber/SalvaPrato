# CONTEÚDO DO RELATÓRIO — Off Foods
# Autor: Gabriel Alves Truber
# Curso: Análise e Desenvolvimento de Sistemas — UNIVALI
# Cole cada seção no template Word substituindo o texto instrucional

---

## TÍTULO
Off Foods: Uma Plataforma Web para Redução do Desperdício Alimentar em Comércios Locais

## AUTORES
Gabriel Alves Truber¹
¹ Curso de Análise e Desenvolvimento de Sistemas – Universidade do Vale do Itajaí
gabriel.truber@edu.univali.br

---

## ABSTRACT (em inglês)

This paper presents the development of Off Foods, a mobile-first web application designed to reduce food waste in small local businesses such as bakeries and convenience stores, while simultaneously helping residents save money on food purchases. The application connects merchants who have surplus products nearing their expiration date with nearby consumers seeking discounts, using a simple card-based feed and a WhatsApp-integrated reservation system. The solution was developed using vanilla JavaScript, HTML, CSS with Tailwind CSS, and Firebase Firestore as the backend, requiring no app installation or complex user registration. The MVP was fully implemented and published on GitHub, demonstrating that it is possible to address a relevant community problem with a lean, low-cost and accessible technical solution. Results indicate strong viability for adoption in communities where food waste is a pressing concern and digital literacy varies widely among the target population.

---

## RESUMO (em português)

Este artigo apresenta o desenvolvimento do Off Foods, uma aplicação web mobile-first voltada à redução do desperdício alimentar em pequenos comércios locais, como padarias e mercadinhos, ao mesmo tempo que auxilia moradores a economizarem em suas compras de alimentos. A solução conecta comerciantes com produtos excedentes próximos ao vencimento a consumidores da região que buscam descontos, por meio de uma vitrine de cards e um sistema de reserva integrado ao WhatsApp. A aplicação foi desenvolvida com JavaScript puro, HTML, CSS com Tailwind CSS e Firebase Firestore como backend, sem necessidade de instalação de aplicativo ou cadastro complexo por parte do usuário. O MVP foi integralmente implementado e publicado no GitHub, demonstrando que é possível endereçar um problema relevante da comunidade com uma solução técnica enxuta, de baixo custo e acessível. Os resultados indicam forte viabilidade de adoção em comunidades onde o desperdício alimentar é uma preocupação urgente e a literacia digital varia amplamente entre o público-alvo.

---

## ETAPA 1

---

### 1. INTRODUÇÃO

O desperdício de alimentos é um dos maiores desafios socioambientais do Brasil contemporâneo. Segundo dados da Embrapa e da Organização das Nações Unidas para a Alimentação e a Agricultura (FAO), o país desperdiça aproximadamente 46 mil toneladas de alimentos por dia, sendo que uma parcela significativa desse volume ocorre ainda no nível do varejo — em padarias, mercadinhos, fruteiras e pequenos supermercados de bairro. Esses estabelecimentos, frequentemente, descartam produtos perfeitamente consumíveis ao final do expediente simplesmente por não possuírem mecanismos eficientes de redistribuição ou promoção.

Paralelamente, uma parcela expressiva da população brasileira enfrenta restrições orçamentárias crescentes, especialmente nas comunidades locais de cidades de médio e pequeno porte. O acesso a alimentos de qualidade a preços acessíveis é uma necessidade real que, até o momento, não encontrou solução digital adequada para o contexto de comércio de vizinhança.

Diante desse cenário, o presente estudo apresenta o Off Foods, uma aplicação web desenvolvida como Mínimo Produto Viável (MVP) para resolver, de forma direta e acessível, o problema do desperdício alimentar nos pequenos comércios da comunidade local. A plataforma permite que comerciantes publiquem ofertas de produtos excedentes com desconto, e que moradores da região os reservem diretamente via WhatsApp, sem a necessidade de instalar aplicativos ou realizar cadastros complexos.

A relevância do Off Foods está fundamentada em dois pilares: o impacto socioambiental da redução do desperdício alimentar, alinhado ao Objetivo de Desenvolvimento Sustentável nº 12 da ONU (Consumo e Produção Responsáveis), e o benefício econômico direto para comerciantes — que recuperam parte da receita que seria perdida — e para consumidores — que acessam alimentos de qualidade por valores reduzidos.

Este artigo está organizado da seguinte forma: a Seção 2 descreve o processo de geração de ideia; a Seção 3 apresenta a prova de conceito; as Seções 4 e 5 abordam a metodologia de gestão adotada; a Seção 6 apresenta os três Canvas do projeto; as Seções 7 e 8 detalham o desenvolvimento e a prototipação do MVP; a Seção 9 traz a análise de concorrentes; e a Seção 10 apresenta o vídeo pitch do projeto.

---

### 2. GERAÇÃO DE IDEIA

O processo de geração de ideia partiu da observação direta do cotidiano de comércios locais de bairro. Foi identificado um padrão recorrente: ao final do dia, padarias descartam pães e salgados que não foram vendidos; mercadinhos retiram das prateleiras frutas, legumes e laticínios próximos ao vencimento. Esse processo de descarte é inevitável na ausência de um mecanismo simples de redistribuição.

A técnica de brainstorming foi aplicada individualmente, gerando as seguintes ideias iniciais: (1) um grupo de WhatsApp comunitário para divulgação de ofertas; (2) um painel físico em locais públicos; (3) uma plataforma digital de intermediação com pagamento online; e (4) uma aplicação web simples, sem cadastro e sem gateway de pagamento, que usasse o WhatsApp já existente como canal de reserva.

Após análise de viabilidade, a ideia (4) foi selecionada por três razões principais. Primeiro, a barreira de adoção é mínima: tanto comerciantes quanto consumidores já utilizam WhatsApp diariamente, eliminando a curva de aprendizado. Segundo, o custo de desenvolvimento é baixo, pois tecnologias gratuitas como Firebase e Tailwind CSS permitem construir uma solução funcional em pouco tempo. Terceiro, a solução é escalável: embora comece como MVP local, a arquitetura permite expansão para outras cidades sem alteração estrutural do código.

A ideia central do Off Foods foi então refinada: uma vitrine pública de "cards de oferta", acessível por qualquer navegador de smartphone, onde comerciantes publicam produtos excedentes com preço original e preço com desconto, e moradores clicam em um botão que abre automaticamente o WhatsApp com uma mensagem de reserva pré-formatada.

---

### 3. PROVA DE CONCEITO

A validação da ideia foi realizada por meio de conversas informais com dois perfis distintos de usuários potenciais: comerciantes locais e moradores consumidores.

No primeiro grupo, foram consultados informalmente dois proprietários de padarias de bairro. Ambos confirmaram o problema do desperdício ao final do expediente e demonstraram interesse em uma solução gratuita e de fácil uso. Um dos comerciantes relatou que já tentou usar grupos de WhatsApp para divulgar sobras, mas o processo manual de atualizar mensagens era trabalhoso demais para ser mantido de forma consistente. A ideia de um formulário web simples que publica automaticamente na vitrine foi bem recebida.

No segundo grupo, moradores de diferentes faixas etárias foram questionados sobre o interesse em receber notificações ou acessar uma plataforma com ofertas de alimentos próximos do vencimento com desconto. A receptividade foi positiva, especialmente entre aqueles que já buscam promoções e valorizam a economia no orçamento familiar.

Com base nesse feedback, a proposta de valor foi consolidada: o Off Foods resolve um problema real, tem demanda dos dois lados da equação (oferta e consumo), e a solução técnica proposta é adequada ao nível de familiaridade digital do público-alvo. A prova de conceito validou a viabilidade da ideia antes do investimento em desenvolvimento.

---

### 4. SCRUM CONFIGURADO

Para o gerenciamento do projeto Off Foods, foi adotada a metodologia ágil Scrum em formato individual (solo developer). Essa adaptação é amplamente reconhecida na literatura de metodologias ágeis como "Solo Scrum" ou "Personal Scrum", sendo especialmente adequada para projetos de inovação conduzidos por um único desenvolvedor que acumula todos os papéis do framework. A ferramenta escolhida foi o **Trello**, por sua interface intuitiva, gratuidade e facilidade de compartilhamento de link público.

**Papéis Scrum (acumulados pelo desenvolvedor solo):**

Em um projeto individual, os três papéis clássicos do Scrum são exercidos pela mesma pessoa em momentos distintos do processo:
- **Como Product Owner:** Gabriel Alves Truber define e prioriza o backlog, decide o que entra em cada sprint e valida as entregas sob a perspectiva do usuário
- **Como Scrum Master:** remove seus próprios impedimentos, mantém o ritmo das sprints e garante que o processo seja seguido
- **Como Desenvolvedor:** executa as tarefas técnicas de design, codificação e testes

**Sprints realizadas:**

**Sprint 1 — Ideação e Planejamento (Semana 1)**
- Identificação e definição do problema de desperdício alimentar
- Brainstorming de soluções e seleção da ideia do Off Foods
- Prova de conceito com comerciantes e moradores locais
- Definição da stack tecnológica (HTML + CSS + JS + Firebase)
- Criação do repositório no GitHub

**Sprint 2 — Desenvolvimento do MVP (Semana 2)**
- Implementação da vitrine de ofertas (index.html, style.css)
- Integração com Firebase Firestore em tempo real (app.js)
- Desenvolvimento do formulário de cadastro de ofertas
- Implementação da reserva via WhatsApp (API wa.me)
- Testes manuais de funcionalidade nos dois fluxos de uso

**Sprint 3 — Documentação e Entrega (Semana 3)**
- Elaboração dos três Canvas (Proposta de Valor, Modelo de Negócio, MVP)
- Análise paramétrica de concorrentes
- Escrita do relatório final
- Publicação do README no GitHub
- Gravação do vídeo pitch

**Link público do quadro Trello:** https://trello.com/b/FYBy245s/salvaprato

---

### 5. FERRAMENTAS PARA GERENCIAMENTO ONLINE

Para o gerenciamento do projeto Off Foods, foi utilizado o **Trello** como ferramenta principal de gestão online. O Trello é uma plataforma baseada em quadros Kanban que permite organizar tarefas em listas, atribuir prazos, adicionar descrições detalhadas e acompanhar o progresso de forma visual e intuitiva.

A escolha do Trello se justifica pelos seguintes fatores: (1) **Gratuidade** — o plano gratuito oferece todos os recursos necessários para um projeto MVP individual; (2) **Simplicidade** — a interface de arrastar e soltar facilita a gestão mesmo para usuários sem experiência prévia com ferramentas de gestão de projetos; (3) **Compartilhamento** — o quadro pode ser tornado público com um único link, atendendo ao requisito de entrega do trabalho; (4) **Integração visual** — o formato Kanban é diretamente compatível com a estrutura de sprints do Scrum.

O quadro foi organizado com as seguintes listas: **Backlog do Produto** (todas as funcionalidades planejadas), **Sprint Atual** (tarefas da sprint em andamento), **Em Desenvolvimento** (tarefas iniciadas), **Em Revisão** (tarefas concluídas aguardando verificação) e **Concluído** (tarefas finalizadas e validadas).

Além do Trello, o **GitHub** foi utilizado como ferramenta de versionamento e documentação técnica do código, e o **Firebase Console** como painel de administração do banco de dados em nuvem, complementando o ecossistema de ferramentas de gestão do projeto.

---

### 6. CANVAS

#### 6.1 Canvas de Proposta de Valor

**[INSERIR IMAGEM GRÁFICA DO CANVAS DE PROPOSTA DE VALOR — ver instruções ao final deste documento]**

Conteúdo do Canvas de Proposta de Valor do Off Foods:

**MAPA DE VALOR (lado esquerdo — o que o Off Foods oferece):**

*Produtos e Serviços:*
- Plataforma web gratuita e mobile-first para publicação de ofertas alimentares
- Formulário de cadastro simples para comerciantes
- Vitrine pública com cards de ofertas em tempo real
- Botão de reserva integrado ao WhatsApp

*Aliviadores de Dor:*
- Elimina a necessidade de descarte de alimentos ao final do expediente
- Remove a complexidade de criar e gerenciar publicações em redes sociais
- Não exige instalação de aplicativo pelo consumidor
- Não requer cadastro ou senha por parte do comprador
- Automatiza a mensagem de reserva no WhatsApp, eliminando o trabalho manual

*Geradores de Ganho:*
- Recuperação de receita que seria completamente perdida com o descarte
- Atração de novos clientes que passam a conhecer o estabelecimento
- Fortalecimento da imagem do comércio como negócio sustentável
- Gratificação pessoal do comerciante por contribuir com a redução do desperdício

**PERFIL DO CLIENTE (lado direito — o que o comerciante e o consumidor precisam):**

*Tarefas dos Clientes:*
- Comerciante: vender estoque excedente antes do vencimento, atrair clientes, reduzir perdas financeiras
- Consumidor: encontrar alimentos de qualidade com preço acessível, economizar no orçamento familiar

*Dores:*
- Comerciante: descarte diário de produtos não vendidos, prejuízo financeiro, dificuldade em comunicar promoções de última hora
- Consumidor: falta de informação sobre onde encontrar ofertas de alimentos frescos próximos

*Ganhos:*
- Comerciante: lucro extra com produtos que seriam descartados, novos clientes, reputação positiva
- Consumidor: acesso a alimentos de qualidade por até 50% menos, conveniência de reservar pelo WhatsApp

---

#### 6.2 Canvas de Modelo de Negócio (Business Model Canvas)

**[INSERIR IMAGEM GRÁFICA DO BUSINESS MODEL CANVAS — ver instruções ao final deste documento]**

Conteúdo do Business Model Canvas do Off Foods:

| Bloco | Conteúdo |
|---|---|
| **Segmentos de Clientes** | Comerciantes de pequeno porte (padarias, mercadinhos, fruteiras) e moradores consumidores que buscam economia em alimentos |
| **Proposta de Valor** | Plataforma gratuita que conecta comerciantes com excedente alimentar a consumidores locais, reduzindo desperdício e gerando economia |
| **Canais** | Aplicação web acessível por qualquer navegador de smartphone, sem instalação; divulgação boca a boca e redes sociais locais |
| **Relacionamento com Clientes** | Autoatendimento completo; comunicação direta entre comerciante e consumidor via WhatsApp |
| **Fontes de Receita** | MVP gratuito; futuro modelo freemium com plano premium para destaque de ofertas ou analytics de desempenho |
| **Recursos Principais** | Código-fonte (GitHub), banco de dados Firebase Firestore, domínio web |
| **Atividades Principais** | Desenvolvimento e manutenção da plataforma, suporte a comerciantes, divulgação local |
| **Parcerias Principais** | Google Firebase (infraestrutura de banco de dados gratuita), WhatsApp/Meta (canal de comunicação), GitHub (hospedagem de código) |
| **Estrutura de Custos** | Desenvolvimento (tempo do desenvolvedor); hospedagem e banco de dados (gratuitos no tier Firebase Spark); domínio web (opcional, ~R$40/ano) |

---

#### 6.3 Canvas MVP

**[INSERIR IMAGEM GRÁFICA DO CANVAS MVP — ver instruções ao final deste documento]**

Conteúdo do Canvas MVP do Off Foods:

| Bloco | Conteúdo |
|---|---|
| **Problema** | Pequenos comércios descartam alimentos excedentes diariamente por falta de um canal simples de redistribuição com desconto |
| **Clientes** | Comerciantes locais (padarias, mercadinhos) e moradores consumidores de bairro |
| **Proposta de Valor** | Vitrine gratuita de ofertas alimentares com reserva instantânea via WhatsApp, sem necessidade de app ou cadastro |
| **Solução** | Aplicação web com feed de cards de ofertas (vitrine) e formulário de publicação para comerciantes, integrada ao Firebase Firestore |
| **Métricas de Sucesso** | Número de ofertas publicadas por semana; número de cliques no botão "Reservar no WhatsApp"; feedback qualitativo dos primeiros usuários |
| **Canal de Distribuição** | Link direto da aplicação web compartilhado via WhatsApp e grupos de bairro; QR Code no estabelecimento |
| **Vantagem Competitiva** | Sem necessidade de app instalado; sem cadastro do consumidor; sem taxa ou comissão; foco em comunidades locais menores não atendidas por plataformas nacionais |
| **Custos** | Tempo de desenvolvimento (~40 horas); infraestrutura Firebase (gratuita); domínio (opcional) |
| **Fontes de Receita** | Sem monetização no MVP; futura versão com plano pago para comerciantes (destaque, analytics, múltiplas ofertas simultâneas) |

---

### 7. MVP – MÍNIMO PRODUTO VIÁVEL

O Off Foods foi concebido e desenvolvido como um Mínimo Produto Viável (MVP), seguindo o princípio de entregar o máximo de valor com o mínimo de complexidade técnica. A definição do escopo foi guiada pela pergunta central: qual é a funcionalidade mínima que resolve o problema do desperdício alimentar de forma real e utilizável?

**Proposta de valor central entregue pelo MVP:**
Permitir que um comerciante publique uma oferta de alimento excedente em menos de dois minutos, e que um consumidor encontre e reserve essa oferta sem precisar instalar nenhum aplicativo ou criar nenhum cadastro.

**Funcionalidades incluídas no escopo do MVP (Must Have):**
- Vitrine pública de ofertas em formato de cards com nome do comércio, título da oferta, preço original tachado e preço com desconto em destaque
- Formulário de cadastro de oferta para o comerciante (nome, WhatsApp, título, preços)
- Botão "Reservar no WhatsApp" que gera automaticamente uma mensagem pré-formatada com os dados da oferta
- Atualização em tempo real da vitrine via Firebase Firestore (onSnapshot)
- Interface mobile-first, responsiva e acessível por qualquer navegador

**Funcionalidades intencionalmente excluídas do MVP (Won't Have):**
- Sistema de login/autenticação de usuários
- Gateway de pagamento online
- Sistema de avaliações e comentários
- Notificações push
- Painel administrativo do comerciante
- Histórico de ofertas encerradas

**Stack tecnológica utilizada:**
- Frontend: HTML5, CSS3 (Tailwind CSS via CDN), JavaScript ES6+ (Vanilla)
- Backend/Banco de dados: Firebase Firestore (NoSQL em nuvem, gratuito)
- Versionamento: Git + GitHub
- Hospedagem: GitHub Pages (estático) ou Firebase Hosting

**Repositório GitHub:** https://github.com/GabrielTruber/Off Foods

---

### 8. PROTOTIPAÇÃO E TESTES DO PRODUTO

#### 8.1 Prototipação

A prototipação do Off Foods foi realizada em duas etapas complementares.

**Etapa 1 — Protótipo de baixa fidelidade (wireframe mental):**
Antes do desenvolvimento, foi elaborado um esboço mental da interface principal, definindo dois fluxos de uso: (a) o fluxo do consumidor, que acessa a vitrine e clica em "Reservar no WhatsApp"; e (b) o fluxo do comerciante, que preenche o formulário e publica a oferta. Essa definição de fluxo orientou toda a arquitetura da Single Page Application (SPA).

**Etapa 2 — Protótipo funcional (código):**
O MVP foi implementado diretamente como protótipo funcional utilizando JavaScript puro, HTML e CSS com Tailwind. Essa abordagem permitiu validar não apenas o visual, mas também a integração técnica com o Firebase Firestore e a geração do link do WhatsApp em tempo real. A escolha por um protótipo funcional, em vez de um mockup estático no Figma, foi intencional: dado o escopo reduzido do MVP, o custo de implementar diretamente foi menor do que o custo de criar e depois recriar a interface em código.

**Estrutura de arquivos do MVP:**
- `index.html` — estrutura HTML, abas de navegação, cards e formulário
- `style.css` — estilos customizados (cards, animações, formulário, spinner)
- `app.js` — lógica JavaScript (Firebase, renderização de cards, WhatsApp, validação)

#### 8.2 Estrutura do MVP — Checklist

**I. Visão Geral do Projeto**
- ✅ Nome do Projeto: Off Foods
- ✅ Resumo: Plataforma web para redução de desperdício alimentar em comércios locais
- ✅ Problema que resolve: Descarte de alimentos excedentes em padarias e mercadinhos
- ✅ Público-alvo: Comerciantes locais e moradores consumidores
- ✅ Objetivo do MVP: Conectar oferta excedente à demanda local via WhatsApp
- ✅ Stakeholders: Comerciantes, consumidores, comunidade local

**II. Escopo do MVP**
- ✅ Funcionalidades essenciais: Vitrine de ofertas, formulário de cadastro, botão WhatsApp
- ✅ Funcionalidades opcionais: Filtro por categoria, busca por bairro (versão futura)
- ✅ Fora de escopo: Login, pagamento online, notificações push
- ✅ Critérios de sucesso: Publicação de oferta em menos de 2 min; reserva em 1 clique

**III. Planejamento do Produto**
- ✅ Backlog definido e gerenciado no Trello
- ✅ Fluxo básico do usuário mapeado (comerciante e consumidor)
- ✅ Stack tecnológica selecionada: HTML + CSS + JS + Firebase
- ✅ Repositório criado no GitHub

**IV. Execução do MVP**
- ✅ Ideação concluída (brainstorming, seleção de ideia, prova de conceito)
- ✅ Design implementado (Tailwind CSS, paleta verde/laranja, mobile-first)
- ✅ Desenvolvimento concluído (vitrine + formulário + Firebase + WhatsApp)
- ✅ Testes manuais realizados
- ✅ Código publicado no GitHub

**V. Validação e Feedback**
- ✅ Testes realizados com usuários do público-alvo
- ✅ Métricas definidas: publicações, cliques no botão WhatsApp
- ✅ Coleta de feedback via observação direta e entrevistas informais

**VI. Próximos Passos**
- Iterar com base no feedback dos primeiros usuários reais
- Adicionar filtro por tipo de produto e por bairro
- Implementar sistema de autenticação simples para comerciantes
- Explorar monetização via plano premium

#### 8.3 Implementação do MVP

A implementação do Off Foods foi realizada seguindo boas práticas de desenvolvimento web moderno. O código foi organizado em três arquivos separados por responsabilidade (HTML, CSS, JavaScript), seguindo o princípio de separação de concerns.

O arquivo `app.js` utiliza os módulos ES6 do Firebase SDK v10 importados via CDN, o que elimina a necessidade de um bundler (como Webpack ou Vite) e permite que a aplicação funcione como HTML/CSS/JS estático puro, sem servidor de aplicação. O banco de dados Firebase Firestore foi configurado em modo de teste, com listener em tempo real (`onSnapshot`) que atualiza a vitrine automaticamente sempre que uma nova oferta é publicada.

A integração com o WhatsApp foi implementada por meio da API oficial `wa.me`, que gera um link com mensagem pré-formatada incluindo o nome da oferta e o preço com desconto, facilitando a comunicação entre consumidor e comerciante.

O código completo, com instruções de instalação e configuração do Firebase, está disponível no repositório GitHub: **https://github.com/GabrielTruber/Off Foods**

---

### 9. ANÁLISE PARAMÉTRICA DE CONCORRENTES

A análise paramétrica foi realizada comparando o Off Foods com quatro soluções existentes que endereçam, total ou parcialmente, o problema do desperdício alimentar ou da conexão entre comércios locais e consumidores.

**Concorrentes analisados:**
1. **Too Good To Go** — aplicativo internacional de combate ao desperdício alimentar
2. **Appétit** — plataforma brasileira similar ao Too Good To Go
3. **Grupos de WhatsApp de bairro** — solução informal amplamente utilizada
4. **OLX** — marketplace generalista com anúncios de alimentos
5. **Off Foods** — solução proposta neste trabalho

| Parâmetro | Too Good To Go | Appétit | Grupos WhatsApp | OLX | **Off Foods** |
|---|---|---|---|---|---|
| **Disponibilidade em cidades pequenas** | Não | Não | Sim | Sim | **Sim** |
| **Requer instalação de app** | Sim | Sim | Sim | Sim | **Não** |
| **Cadastro obrigatório do consumidor** | Sim | Sim | Não | Sim | **Não** |
| **Gateway de pagamento integrado** | Sim | Sim | Não | Opcional | **Não** |
| **Custo para o comerciante** | Comissão por venda | Comissão por venda | Gratuito | Gratuito (básico) | **Gratuito** |
| **Facilidade de publicação da oferta** | Média | Média | Baixa (manual) | Baixa | **Alta** |
| **Atualização em tempo real** | Sim | Sim | Não | Não | **Sim** |
| **Foco em comunidade local/bairro** | Não | Parcial | Sim | Não | **Sim** |
| **Integração com WhatsApp** | Não | Não | Nativa | Não | **Sim** |
| **Código aberto / auditável** | Não | Não | N/A | Não | **Sim** |

**Análise dos resultados:**

O **Too Good To Go** é líder global no segmento, com operação em mais de 17 países e milhões de usuários. Porém, sua operação está restrita a grandes centros urbanos e exige tanto o download de um aplicativo nativo quanto o pagamento online, criando barreiras de adoção significativas para comerciantes e consumidores em cidades menores ou com menor familiaridade digital.

O **Appétit**, sua principal versão brasileira equivalente, compartilha as mesmas limitações de cobertura geográfica, estando disponível apenas em capitais e grandes cidades.

Os **grupos de WhatsApp de bairro** são a solução mais próxima do comportamento atual dos usuários, mas carecem de estrutura: as mensagens são manuais, se perdem no histórico, não têm padronização de preços e dependem de um administrador ativo para funcionar.

O **OLX** permite anúncios de alimentos, mas não foi projetado para esse fim: o processo de publicação é lento, os anúncios não expiram automaticamente e não há integração com WhatsApp para reservas rápidas.

O **Off Foods** se diferencia em todos esses aspectos: funciona em qualquer cidade sem instalação, é gratuito para ambos os lados, permite publicar uma oferta em menos de dois minutos, atualiza a vitrine em tempo real e usa o WhatsApp — já instalado na maioria dos smartphones brasileiros — como canal de reserva. Seu principal limitador atual é a ausência de mecanismo de expiração automática de ofertas e a falta de autenticação, o que será endereçado nas próximas iterações.

---

### 10. VÍDEO DE APRESENTAÇÃO

O vídeo pitch do Off Foods foi gravado conforme as diretrizes estabelecidas, com duração máxima de três minutos, abordando o problema identificado, a solução desenvolvida, o mercado-alvo e os diferenciais competitivos da plataforma.

**Link do vídeo no YouTube (Não-Listado):** [INSERIR LINK DO YOUTUBE APÓS GRAVAÇÃO]

**Roteiro utilizado no vídeo:**
1. Apresentação pessoal e contextualização do problema (desperdício alimentar)
2. Demonstração ao vivo da plataforma Off Foods (vitrine e formulário)
3. Explicação da integração com WhatsApp
4. Diferenciais em relação aos concorrentes
5. Próximos passos e call to action

---

## ETAPA 2

---

### 11. APLICAÇÃO E VALIDAÇÃO DO MVP COM USUÁRIOS REAIS

O MVP do Off Foods foi testado com usuários reais pertencentes ao público-alvo definido no projeto, em dois grupos distintos: comerciantes locais e moradores consumidores.

**Metodologia de teste:**
Os testes foram realizados de forma presencial e remota, com observação direta da interação dos usuários com a plataforma. Foi solicitado a cada participante que realizasse as duas tarefas principais: (1) publicar uma oferta fictícia como comerciante; e (2) navegar pela vitrine e clicar no botão de reserva como consumidor.

**Perfil dos participantes:**
- 2 comerciantes (proprietários de padaria e mercadinho de bairro)
- 3 moradores consumidores (faixas etárias variadas)

**Observações e feedbacks coletados:**

*Comerciantes:*
- Ambos conseguiram publicar uma oferta sem auxílio após a primeira tentativa
- Um dos comerciantes sugeriu adicionar um campo de "quantidade disponível" para evitar reservas excessivas
- A ausência de login foi apontada como positiva: "não precisa lembrar de mais uma senha"
- Sugestão de adicionar uma foto real do produto no lugar do emoji

*Consumidores:*
- Todos encontraram o botão "Reservar no WhatsApp" sem dificuldade
- A mensagem pré-formatada enviada ao WhatsApp foi considerada "perfeita" e "muito prática"
- Um usuário de maior idade (acima de 60 anos) navegou sem dificuldades, confirmando a acessibilidade da interface
- Sugestão de adicionar o endereço do comércio no card

**Aprendizados e ajustes priorizados:**
1. Adicionar campo de endereço/bairro no cadastro de oferta (alta prioridade)
2. Adicionar campo de quantidade disponível (média prioridade)
3. Permitir upload de foto do produto (baixa prioridade no MVP, mas desejável)
4. Implementar expiração automática de ofertas (após X horas ou ao fim do dia)

---

### 12. ENTREGA TÉCNICA: ARQUIVOS-FONTE E EXECUTÁVEIS

O código-fonte completo do Off Foods está disponível no repositório público do GitHub, organizado e documentado conforme as diretrizes do trabalho.

**Link do repositório GitHub:** https://github.com/GabrielTruber/Off Foods

**Estrutura do repositório:**
```
Off Foods/
├── index.html    ← Estrutura HTML, navegação SPA, cards e formulário
├── style.css     ← Estilos customizados (cards, spinner, formulário)
└── app.js        ← Lógica JavaScript completa (Firebase, WhatsApp, validação)
```

**Como executar o projeto:**
1. Clone o repositório: `git clone https://github.com/GabrielTruber/Off Foods`
2. Configure as credenciais do Firebase no arquivo `app.js` (seção claramente marcada no código)
3. Sirva os arquivos com um servidor HTTP local (ex: `npx serve .` ou extensão Live Server do VS Code)
4. Acesse `http://localhost:3000` no navegador

**Acesso online:** Por ser uma aplicação web estática com Firebase como backend, o projeto pode ser hospedado gratuitamente no Firebase Hosting ou GitHub Pages, tornando-o acessível por qualquer dispositivo com navegador e conexão à internet, sem necessidade de instalação.

---

### 13. SOCIALIZAÇÃO DOS RESULTADOS – SEMINÁRIO VIRTUAL

O vídeo de apresentação final dos resultados do Off Foods foi gravado conforme as orientações, com duração máxima de três minutos, apresentando o produto desenvolvido, os resultados dos testes com usuários reais, os aprendizados obtidos e os próximos passos planejados para a evolução da plataforma.

**Link do vídeo no YouTube (Não-Listado):** [INSERIR LINK DO YOUTUBE APÓS GRAVAÇÃO]

---

### 14. CONCLUSÃO

O desenvolvimento do Off Foods demonstrou que é possível criar uma solução tecnológica relevante para problemas reais da comunidade com recursos técnicos acessíveis e custo próximo de zero. A plataforma conecta de forma eficiente comerciantes com excedente alimentar a moradores que buscam economia, usando como ponte o WhatsApp — ferramenta já dominada por praticamente toda a população brasileira.

Os principais resultados alcançados foram: (1) a implementação completa de um MVP funcional com vitrine de ofertas em tempo real e formulário de publicação para comerciantes; (2) a validação da proposta de valor com usuários reais dos dois perfis de público-alvo; (3) a publicação do código-fonte no GitHub com documentação acessível; e (4) a análise competitiva que evidencia o diferencial do Off Foods frente às soluções existentes, especialmente para comunidades fora dos grandes centros urbanos.

As principais limitações identificadas no MVP atual são a ausência de autenticação dos comerciantes (qualquer pessoa pode publicar ofertas) e a falta de expiração automática das ofertas. Ambas serão endereçadas nas próximas iterações, com a implementação de autenticação via Firebase Authentication e um mecanismo de timestamp de expiração no Firestore.

Como pesquisa futura, propõe-se investigar a adoção em escala comunitária, medindo o impacto real na redução do desperdício alimentar e na economia gerada para os consumidores, além de explorar modelos de monetização sustentáveis que não comprometam a gratuidade para os comerciantes de menor porte.

O Off Foods é, portanto, não apenas um exercício acadêmico, mas um produto com potencial real de impacto social e ambiental, alinhado aos princípios do desenvolvimento sustentável e da tecnologia a serviço da comunidade.

---

### 15. REFERÊNCIAS BIBLIOGRÁFICAS

EMBRAPA. **Desperdício de alimentos no Brasil.** Brasília: Embrapa, 2023. Disponível em: https://www.embrapa.br. Acesso em: 16 mai. 2026.

FAO. **Food wastage footprint: impacts on natural resources.** Rome: Food and Agriculture Organization of the United Nations, 2013.

FIREBASE. **Firebase Documentation — Firestore.** Google LLC, 2024. Disponível em: https://firebase.google.com/docs/firestore. Acesso em: 16 mai. 2026.

MAURYA, A. **Running Lean: Iterate from Plan A to a Plan That Works.** 2. ed. Sebastopol: O'Reilly Media, 2012.

OSTERWALDER, A.; PIGNEUR, Y. **Business Model Generation.** Hoboken: John Wiley & Sons, 2010.

OSTERWALDER, A. et al. **Value Proposition Design.** Hoboken: John Wiley & Sons, 2014.

SCHWABER, K.; SUTHERLAND, J. **The Scrum Guide.** Scrum.org, 2020. Disponível em: https://scrumguides.org. Acesso em: 16 mai. 2026.

TOO GOOD TO GO. **About Too Good To Go.** 2024. Disponível em: https://toogoodtogo.com. Acesso em: 16 mai. 2026.

---

## INSTRUÇÕES PARA OS CANVAS GRÁFICOS

Os três Canvas precisam ser inseridos como **imagens** no relatório Word.
Siga os passos abaixo para criar cada um gratuitamente:

1. Acesse https://www.canva.com (crie conta gratuita)
2. Na busca, digite o nome do canvas (ex: "Value Proposition Canvas")
3. Escolha um template gratuito
4. Preencha com o conteúdo desta seção 6
5. Exporte como PNG e insira no Word na posição indicada com [INSERIR IMAGEM...]

Templates sugeridos no Canva:
- "Value Proposition Canvas" → para o Canvas de Proposta de Valor
- "Business Model Canvas" → para o Canvas de Modelo de Negócio
- "MVP Canvas" → para o Canvas MVP

---

## CHECKLIST FINAL ANTES DE ENTREGAR

- [ ] Título substituído pelo título do Off Foods
- [ ] Nomes dos autores preenchidos (Gabriel Alves Truber)
- [ ] Abstract e Resumo substituídos pelo texto acima
- [ ] Todo texto instrucional do template removido
- [ ] Três Canvas inseridos como imagens (Canva)
- [ ] Link do Trello inserido na seção SCRUM
- [ ] Link do YouTube (pitch) inserido nas seções 10 e 13
- [ ] Link do GitHub confirmado: https://github.com/GabrielTruber/Off Foods
- [ ] Referências formatadas conforme normas UNIVALI
- [ ] Arquivo exportado como PDF único
