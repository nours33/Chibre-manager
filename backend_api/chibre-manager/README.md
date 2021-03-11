# Backend

## Dependance

 - Ruby
 - Rails
 - PostgreSQL
 - WSL
 - yarn
 - NODE LTS 12
 

## Installation


1. Télécharger le repo suivant
2. Tappez cette commande n'importe ou depuis votre console
```bash
bash
```
3. Pour pouvoir lancez votre serveur postgresql vous devez écrire la commande suivante
```bash
sudo service postgresql start
```
4. Vous devez ensuite installer toute les dépendance avec cette commande
```bash
yarn install ou npm install
```
5. Lancez la commande suivante depuis la backend_api/chibre-manager/
```bash
rails db:create
```
6. Ecrivez la commande suivante pour effectuer les migrations
```bash
rails db:migration
```
7. Ecrivez ensuite cette commande pour mettre en marche votre serveur web 
```bash
rails s
```
