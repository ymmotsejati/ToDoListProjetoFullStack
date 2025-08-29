# ToDo List com IA (Full-Stack)

![Status](https://img.shields.io/badge/status-em_desenvolvimento-yellow)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)

[🇧🇷 Português](#-português) | [🇬🇧 English](#-english)

---

## 🇧🇷 Português

### 📝 Descrição
**ToDoList com IA integrada** é um projeto de estudo de uma aplicação full-stack de lista de tarefas. O objetivo foi construir um sistema completo e moderno, desde a autenticação segura de usuários até a integração com uma Inteligência Artificial generativa para funcionalidades inteligentes.

**Este projeto está em andamento.** Novas funcionalidades e refinamentos estão sendo adicionados continuamente.

### 🎥 Demonstração Rápida
![Demonstração do App](docs/midias/todolist-v1.gif)

### ✨ Principais Funcionalidades
* **Autenticação de Usuários:** Sistema completo de Registro e Login com segurança baseada em Tokens JWT.
* **CRUD Completo de Tarefas:** Crie, leia, atualize e exclua tarefas de forma interativa.
* **Criação Inteligente com IA:** Use linguagem natural (ex: "Reunião com a equipe amanhã às 10h") e a IA preenche os detalhes da tarefa para você.
* **Interface Reativa:** Construída com Angular e Angular Material para uma experiência de usuário limpa e moderna, com notificações em tempo real.
* **Segurança:** Rotas do frontend protegidas e endpoints da API que garantem que um usuário só possa acessar suas próprias tarefas.

### 💻 Tecnologias Utilizadas
| Frontend (Cliente) | Backend (Servidor) |
|---|---|
| **Angular 18** (Standalone Components) | **.NET 9** (API RESTful) |
| **TypeScript** | **C#** |
| **Angular Material** (UI) | **Entity Framework Core** (ORM) |
| **npm** | **SQL Server** (Banco de Dados) |
| **Git & GitHub** | **JWT** (Autenticação) |
| - | **Google Gemini API** (Inteligência Artificial) |

### 📸 Telas do Projeto
| Login | Edição | Tarefas |
|---|---|---|
| ![Tela de Login](docs/midias/print_login.png) | ![Tela de Registro](docs/midias/print_register.png)  | ![Tela de Tarefas](docs/midias/print_todolist.png)|

### 🚀 Como Executar o Projeto (Getting Started)
**Pré-requisitos:**
* [.NET SDK 9.0+](https://dotnet.microsoft.com/download)
* [Node.js e npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* [SQL Server](https://www.microsoft.com/sql-server/sql-server-downloads) (ou LocalDB)
* [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) (para autenticação da IA)

**1. Configuração do Backend (.NET)**
```bash
# Navegue para a pasta da API
cd ToDoListProjeto.Backend/ToDoListProjeto.Api

# Inicialize o User Secrets para guardar dados sensíveis
dotnet user-secrets init

# Configure seus segredos (substitua pelos seus dados)
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=SEU_SERVIDOR;Database=ToDoListDB;User Id=SEU_USUARIO;Password=SUA_SENHA;TrustServerCertificate=True"
dotnet user-secrets set "Jwt:Secret" "SUA_CHAVE_SECRETA_SUPER_LONGA_E_SEGURA_AQUI"
dotnet user-secrets set "GoogleCloud:ProjectId" "SEU_ID_DE_PROJETO_GOOGLE_CLOUD"

# Autentique sua máquina para usar a API da IA
gcloud auth application-default login

# Crie e aplique as migrações no banco de dados
dotnet ef database update

# Execute a API
dotnet run
```
A API estará rodando em `https://localhost:7165`.

**2. Configuração do Frontend (Angular)**
```bash
# Navegue para a pasta do frontend
cd ToDoListProjeto.Frontend

# Instale as dependências
npm install

# Execute a aplicação
ng serve
```
A aplicação estará acessível em `http://localhost:4200`.

---

## 🇬🇧 English

### 📝 Description
**AI-Powered To-Do List** is a full-stack study project of a task management application. The goal was to build a complete, modern system, from secure user authentication to integration with a generative AI for smart features.

**This project is a work in progress.** New features and refinements are being added continuously.

### 🎥 Quick Demo
![App Demo](docs/midias/todolist-v1.gif)

### ✨ Key Features
* **User Authentication:** Complete Register and Login system with security based on JWT (JSON Web Tokens).
* **Full Task CRUD:** Interactively create, read, update, and delete tasks.
* **AI-Powered Smart Creation:** Use natural language (e.g., "Meeting with the team tomorrow at 10 AM") and let the AI fill in the task details for you.
* **Reactive UI:** Built with Angular and Angular Material for a clean and modern user experience with real-time feedback.
* **Security:** Protected frontend routes and API endpoints ensure that a user can only access their own tasks.

### 💻 Tech Stack
| Frontend (Client) | Backend (Server) |
|---|---|
| **Angular 18** (Standalone Components) | **.NET 9** (RESTful API) |
| **TypeScript** | **C#** |
| **Angular Material** (UI) | **Entity Framework Core** (ORM) |
| **npm** | **SQL Server** (Database) |
| **Git & GitHub** | **JWT** (Authentication) |
| - | **Google Gemini API** (Artificial Intelligence) |

### 📸 Project Screenshots
| Login | Tasks | Edit |
|---|---|---|
| ![Login Screen](docs/midias/print_login.png) | ![Register Screen](docs/midias/print_register.png)  | ![Tasks Screen](docs/midias/print_todolist.png)|
### 🚀 Getting Started
**Prerequisites:**
* [.NET SDK 9.0+](https://dotnet.microsoft.com/download)
* [Node.js & npm](https://nodejs.org/)
* [Angular CLI](https://angular.io/cli)
* [SQL Server](https://www.microsoft.com/sql-server/sql-server-downloads) (or LocalDB)
* [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) (for AI authentication)

**1. Backend Setup (.NET)**
```bash
# Navigate to the API folder
cd ToDoListProjeto.Backend/ToDoListProjeto.Api

# Initialize User Secrets to store sensitive data
dotnet user-secrets init

# Configure your secrets (replace with your data)
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Server=YOUR_SERVER;Database=ToDoListDB;User Id=YOUR_USER;Password=YOUR_PASSWORD;TrustServerCertificate=True"
dotnet user-secrets set "Jwt:Secret" "YOUR_SUPER_LONG_AND_SECURE_SECRET_KEY_HERE"
dotnet user-secrets set "GoogleCloud:ProjectId" "YOUR_GOOGLE_CLOUD_PROJECT_ID"

# Authenticate your machine to use the AI API
gcloud auth application-default login

# Create and apply database migrations
dotnet ef database update

# Run the API
dotnet run
```
The API will be running on `https://localhost:7165`.

**2. Frontend Setup (Angular)**
```bash
# Navigate to the frontend folder
cd ToDoListProjeto.Frontend

# Install dependencies
npm install

# Run the application
ng serve
```
The application will be accessible at `http://localhost:4200`.
