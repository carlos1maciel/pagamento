# 🧠 Perfil Psíquico — Funil de Vendas com Quiz de Personalidade

> Descubra quem você realmente é. Um funil de vendas completo com quiz psicológico, paywall e checkout integrado.

---

## 📌 Sobre o Projeto

**Perfil Psíquico** é um funil de vendas single-page construído com HTML, CSS e JavaScript puro. O usuário responde a um quiz de personalidade com 15 questões e, ao final, é apresentado ao seu perfil psicológico com parte do resultado bloqueado por um **paywall de R$ 9,90**, incentivando a conversão com técnicas psicológicas avançadas.

---

## 🚀 Funcionalidades

### 🎯 Fluxo do Funil (7 etapas)

| #   | Seção                  | Descrição                                                   |
| --- | ---------------------- | ----------------------------------------------------------- |
| 1   | **Landing Page**       | Apresentação com prova social, depoimentos e CTA principal  |
| 2   | **Quiz**               | 15 questões em 3 dimensões psicológicas (5 por dimensão)    |
| 3   | **Captura de E-mail**  | Formulário no meio do quiz para capturar lead               |
| 4   | **Loading / Análise**  | Tela animada que simula o processamento do perfil           |
| 5   | **Paywall**            | Resultado parcial + oferta de R$ 9,90 com timer de urgência |
| 6   | **Checkout**           | Formulário de pagamento com Cartão ou Pix                   |
| 7   | **Resultado Completo** | Laudo completo desbloqueado após pagamento                  |

---

## 🧬 Os 8 Perfis de Personalidade

O algoritmo combina 3 dimensões psicológicas binárias, gerando 8 tipos únicos:

| Código | Nome                    | Emoji |
| ------ | ----------------------- | ----- |
| `000`  | O Analista Estratégico  | 🧠    |
| `001`  | O Guardião Reflexivo    | 🌿    |
| `010`  | O Conector Empático     | 💜    |
| `011`  | O Sonhador Inovador     | ✨    |
| `100`  | O Líder Visionário      | 👑    |
| `101`  | O Pioneiro Audacioso    | ⚡    |
| `110`  | O Realizador Resiliente | 🏆    |
| `111`  | A Alma Criativa         | 🌈    |

### Dimensões Avaliadas

- **Dimensão 0 (Q1–Q5):** Introversão (I) vs. Extroversão (E)
- **Dimensão 1 (Q6–Q10):** Racional/Pensamento (T) vs. Emocional/Sentimento (F)
- **Dimensão 2 (Q11–Q15):** Estruturado (S) vs. Flexível (P)

---

## 💡 Técnicas de Conversão Utilizadas

- **Sunk Cost** — Mensagem de investimento de tempo antes do paywall
- **Curiosity Gap** — Parte do resultado visível, parte bloqueada
- **Social Proof** — Contador ao vivo de usuários online, depoimentos e avaliações ★★★★★
- **FOMO / Urgência** — Timer regressivo de 15 minutos na oferta
- **Anchoring de Preço** — "Valor real: R$ 97,00" vs. "R$ 9,90"
- **Garantia** — Política de 7 dias de reembolso sem perguntas
- **Badges de Segurança** — SSL 256-bit, PCI Compliance, dados protegidos

---

## 🎨 Design System

### Paleta de Cores

| Token      | Cor       | Uso                    |
| ---------- | --------- | ---------------------- |
| `--purple` | `#8b5cf6` | Cor primária / acentos |
| `--pink`   | `#ec4899` | Gradientes e destaques |
| `--gold`   | `#f59e0b` | Estrelas e urgência    |
| `--cyan`   | `#06b6d4` | Perfil Analista        |
| `--green`  | `#10b981` | Checkmarks e pulse dot |
| `--red`    | `#ef4444` | Alertas e Pioneiro     |

### Tipografia

- **Headings:** `Space Grotesk` (Google Fonts)
- **Corpo:** `Inter` (Google Fonts)

### Animações

- Fade In / Slide animações de entrada nas seções
- Brain pulse no loading
- Pulse dot (indicador online ao vivo)
- Float ambiental de fundo
- Hover com translateY e scale nos botões e cards

---

## 🛒 Checkout

A seção de pagamento suporta dois métodos:

- **💳 Cartão de Crédito** — com formatação automática do número, validade (MM/AA) e CVV
- **⚡ Pix** — geração de QR Code e chave Pix copiável via clipboard

---

## 🗂️ Estrutura de Arquivos

```
pagamento/
├── index.html          # Toda a estrutura HTML do funil (7 seções)
├── css/
│   └── style.css       # Design system completo (~1700 linhas)
└── js/
    └── app.js          # Lógica do quiz, navegação, timer e animações (~1350 linhas)
```

---

## ⚙️ Tecnologias

- **HTML5** — Semântico com SEO básico (meta tags, lang, viewport)
- **CSS3** — Variáveis CSS, Grid, Flexbox, animações com `@keyframes`
- **JavaScript (ES6+)** — Vanilla JS, sem dependências externas
- **Google Fonts** — Inter + Space Grotesk

> ⚠️ Projeto 100% frontend. A integração real com gateway de pagamento (ex: Stripe, Mercado Pago, PagSeguro, Hotmart) deve ser implementada no backend.

---

## 🖥️ Como Rodar Localmente

Por ser um projeto estático, basta abrir o `index.html` em um servidor local:

```bash
# Com Python
python3 -m http.server 8080

# Com PHP
php -S localhost:8080

# Com Node.js (npx)
npx serve .
```

Acesse: [http://localhost:8080](http://localhost:8080)

---

## 📈 Próximos Passos (Roadmap)

- [ ] Integração com gateway de pagamento (Mercado Pago / Stripe)
- [ ] Backend para captura e envio de e-mails (Mailchimp, ActiveCampaign)
- [ ] Envio do resultado em PDF por e-mail
- [ ] Página de upsell pós-compra
- [ ] Analytics e rastreamento de conversão (Meta Pixel, Google Tag)
- [ ] Testes A/B nas CTAs e preços

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e prototipagem de funis de vendas digitais.

---

<div align="center">
  Feito com 💜 por <a href="https://github.com/carlos1maciel">Carlos Maciel</a>
</div>
