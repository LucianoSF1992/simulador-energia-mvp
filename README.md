⚡ Simulador de Energia — MVP

Sistema web que permite ao usuário enviar a fatura de energia em PDF e, com base nos dados extraídos, simular e comparar fornecedores, indicando a opção mais econômica.

🎯 Projeto desenvolvido como MVP funcional, com foco em simplicidade, usabilidade mobile e escalabilidade futura.

🧩 Visão Geral

O Simulador de Energia realiza:

📄 Leitura automática de PDF da conta de luz

🤖 Extração inteligente de consumo (kWh) e valor

📊 Comparação entre fornecedores de energia

💰 Cálculo de economia estimada

📱 Interface 100% responsiva (mobile first)

🗄️ Histórico de simulações salvo em banco de dados

🛠️ Tecnologias Utilizadas
🔹 Frontend

React (Create React App)

Axios

Chart.js

CSS Mobile First

🔹 Backend

Node.js

Express

Multer (upload de arquivos)

pdf-parse (leitura de PDF)

MySQL2

🔹 Banco de Dados

MySQL

🔹 Infraestrutura / DevOps

Git & GitHub

Vercel (Frontend)

Railway (Backend + MySQL)

🏗️ Arquitetura do Projeto
simulador-energia-mvp
 ├─ backend/
 │  ├─ src/
 │  │  ├─ controllers/
 │  │  ├─ services/
 │  │  ├─ routes/
 │  │  └─ database/
 │  └─ server.js
 │
 ├─ frontend/
 │  ├─ src/
 │  │  ├─ components/
 │  │  ├─ pages/
 │  │  ├─ services/
 │  │  └─ styles/
 │  └─ package.json
 │
 └─ database/
    └─ schema.sql

🚀 Funcionalidades do MVP

✔ Upload de conta de energia em PDF
✔ Leitura automática do PDF
✔ Extração de consumo (kWh) e valor
✔ Comparação entre fornecedores
✔ Indicação da melhor opção
✔ Cálculo de economia estimada
✔ Gráfico comparativo
✔ Histórico salvo no banco

🧠 Fluxo de Funcionamento

Usuário envia o PDF da conta de luz

Backend lê e extrai os dados

Sistema calcula o custo para cada fornecedor

Retorna:

Melhor fornecedora

Comparativo de preços

Economia estimada

Dados são salvos no banco para histórico

▶️ Como rodar o projeto localmente
🔹 Pré-requisitos

Node.js (LTS)

MySQL

Git

🔹 1. Clonar o repositório
git clone https://github.com/SEU_USUARIO/simulador-energia-mvp.git
cd simulador-energia-mvp

🔹 2. Banco de Dados

Execute o script:

database/schema.sql


no MySQL Workbench.

🔹 3. Backend
cd backend
npm install
npm run dev


Crie o arquivo .env:

PORT=3333
DB_HOST=localhost
DB_USER=usuario_mysql
DB_PASSWORD=senha_mysql
DB_NAME=simulador_energia

🔹 4. Frontend
cd frontend
npm install
npm start


Acesse:

http://localhost:3000

🌐 Deploy

Frontend: Vercel

Backend: Railway

Banco: MySQL (Railway)

📈 Próximas Evoluções (Roadmap)

🔐 Autenticação JWT

👤 Painel administrativo

📑 OCR para PDFs escaneados

🤖 IA avançada para múltiplos layouts

📊 Relatórios detalhados

📲 Versão PWA (app instalável)

🔌 Integração real com CRM

👨‍💻 Autor

Luciano Ferreira
Desenvolvedor Full Stack

📌 Projeto criado para:

Portfólio profissional

MVP de produto

Base para SaaS

📄 Licença

Este projeto está sob a licença MIT.

⭐ Considerações finais

Este projeto foi desenvolvido com foco em clareza, boas práticas e evolução contínua, representando um sistema real de mercado, não apenas um projeto didático.
