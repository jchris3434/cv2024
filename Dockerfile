# Étape 1 : Construire l'application Next.js
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Créer l'image finale pour l'exécution
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de build depuis l'étape précédente
COPY --from=builder /app ./

# Installer uniquement les dépendances de production
RUN npm install --production --legacy-peer-deps

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application Next.js en mode production
CMD ["npm", "start"]
