import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Stories = db.define('stories',{
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    tags: DataTypes.STRING,
    status: DataTypes.STRING
},{
    freezeTableName:true
});

export default Stories;

(async()=>{
    await db.sync();
})();