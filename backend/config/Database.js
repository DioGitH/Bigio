import { Sequelize } from "sequelize";

const db = new Sequelize('bigio_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;