# 🚀 Application de Gestion des Employés (MEAN Stack)

Une application web moderne et responsive de gestion des employés, développée avec le stack **MEAN** (MongoDB, Express.js, Angular, Node.js).

## 🌟 Fonctionnalités

* ✨ Interface utilisateur moderne et minimaliste
* 🌓 Thèmes clair & sombre intégrés
* 📱 Design responsive adapté à tous les appareils
* ✅ Fonctions complètes de gestion des employés :

  * Création
  * Consultation
  * Mise à jour
  * Suppression
* 🔍 Recherche & filtrage intelligent
* 📊 Expérience utilisateur intuitive

## 🛠️ Technologies Utilisées

### Frontend

* Angular
* TypeScript
* HTML5 / CSS3
* Angular Material
* Design System personnalisé

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## 📋 Prérequis

* Node.js v14 ou plus
* MongoDB
* Angular CLI (`npm install -g @angular/cli`)

## 🚀 Installation

1. **Cloner le projet :**

```bash
git clone https://github.com/ismail745/EMPLOYEE-CRUD-MEAN.git
cd EMPLOYEE-CRUD-MEAN
```

2. **Installer les dépendances :**

   * **Backend :**

   ```bash
   cd backend
   npm install
   ```

   * **Frontend :**

   ```bash
   cd ../frontend
   npm install
   ```

3. **Configurer la base de données :**

   * Créer un fichier `.env` dans le dossier `backend` :

     ```
     MONGODB_URI=your_mongodb_uri
     PORT=3000
     ```

## 🎯 Démarrage

* **Lancer le backend :**

```bash
cd backend
npm start
```

* **Lancer le frontend :**

```bash
cd ../frontend
ng serve
```

* **Accéder à l'application :**
  Ouvrir [http://localhost:4200](http://localhost:3000) dans votre navigateur.

## 📱 Responsive Design

Fonctionne parfaitement sur :

* 💻 Ordinateurs
* 📱 Tablettes
* 📱 Mobiles

## 🔄 API Endpoints

| Méthode | Endpoint             | Description                 |
| ------: | -------------------- | --------------------------- |
|     GET | `/api/`              | Récupérer tous les employés |
|     GET | `/api/:id`           | Récupérer un employé par ID |
|    POST | `/api/`              | Créer un nouvel employé     |
|     PUT | `/api/:id`           | Mettre à jour un employé    |
|  DELETE | `/api/:id`           | Supprimer un employé        |

## 👥 Contribution

Les contributions sont bienvenues !

1. Fork le projet
2. Crée une branche (`git checkout -b feature/NouvelleFonctionnalité`)
3. Commit tes changements (`git commit -m 'Ajout de fonctionnalité'`)
4. Push sur ta branche (`git push origin feature/NouvelleFonctionnalité`)
5. Ouvre une Pull Request


## 👥 Auteur

Ismail Kchibal
