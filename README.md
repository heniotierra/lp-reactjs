Demo App

Instruction to run
==================

Requerements:
--------------------
Node v10.23.2
Docker Engine 19
docker-compose 3.5

To start the database application, follow these steps:

    cd lp-docker-reactjs-challege
    docker-compose up -d


Install Sequelize globally:

    npm install sequelize sequelize-cli


Install Sequelize globally:

    npm install sequelize sequelize-cli sequelize-cli-typescript


Create the properties table in the database and seed it:

    cd api/src/data
    sequelize db:migrate
    sequelize db:seed


Start the API application:

    cd api
    npm install
    npm start

Start the WEB application:

    cd web
    npm install
    npm start



TODOs
==================

Hanlde errors returned from the API - didn't have enough time to cover this
Improve carosel for showing images


