# Backend

## Dependance
### WSL
Pour pouvoir installer wsl veuillez vous rendre sur cette page et suivre les instructions pour l'installation.
https://docs.microsoft.com/en-us/windows/wsl/install-win10
### Ruby
```bash
sudo apt install ruby-full
```
### RVM
```bash
curl -sSL https://get.rvm.io | bash -s stable --ruby
```
### Rails
```bash
rvm install ruby-3.0.0
```
### PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib
```
### NODE LTS 12
```bash
sudo apt install nodejs
```
### Yarn
```bash
npm install --global yarn
```
 

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


## Version
Ruby 3.0.0

## Site Web
https://www.ruby-lang.org/fr/
