# 📊 Expense Tracker App

🚀 **Expense Tracker App** est une application mobile développée avec **React Native** (Ignite) et un backend en **Node.js** utilisant **Express.js** et **MongoDB** (via Mongoose). Cette application permet aux utilisateurs de gérer leurs dépenses de manière simple et efficace.

## 📌 Fonctionnalités
✅ **Authentification utilisateur** (à venir)  
✅ **Ajout, modification et suppression des dépenses**  
✅ **Affichage des dépenses avec catégorisation**  
✅ **Stockage des données avec MongoDB (bientôt connecté)**  
✅ **API RESTful pour la gestion des dépenses**  

---

## 🏗️ **Technologies utilisées**
### **Frontend (React Native)**
- 🔹 **React Native Ignite** (Boilerplate utilisé pour un développement rapide)
- 🔹 **TypeScript**
- 🔹 **React Navigation** (Gestion de la navigation)
- 🔹 **Zustand ou Redux Toolkit** (Gestion d’état)
- 🔹 **Axios** (Appels API)

### **Backend (Node.js & Express.js)**
- 🔹 **Express.js** (Framework pour créer des APIs REST)
- 🔹 **MongoDB** (Base de données NoSQL – à connecter)
- 🔹 **Mongoose** (ODM pour interagir avec MongoDB)
- 🔹 **CORS & dotenv** (Gestion des variables d’environnement et des accès)
- 🔹 **Nodemon** (Rechargement automatique du serveur en dev)

---

## ⚙️ **Installation et configuration**

### **1️⃣ Cloner le projet**
```sh
git clone https://github.com/ton-projet/expense-tracker.git
cd expense-tracker


Frontend : React Native
cd expense-tracker-frontend
npm install
Lancer l’application 
npx react-native run-ios
npx react-native run-android

expense-tracker-frontend
├── app
│   ├── api.ts (Gestion des appels API)
│   ├── components
│   ├── screens
│   ├── navigators
│   ├── store (Gestion d’état Zustand ou Redux)
│   ├── App.tsx
├── android
├── ios
└── package.json

Backend : Node.js + Express
cd expense-tracker-backend
npm install
Démarrer le serveur
node server.js
Le serveur sera accessible sur :
http://localhost:5002

expense-tracker-backend
├── models
│   ├── Expense.js (Modèle Mongoose)
├── routes
│   ├── expenseRoutes.js (Routes API)
├── server.js (Serveur Express)
├── .env (Variables d’environnement)
├── package.json
