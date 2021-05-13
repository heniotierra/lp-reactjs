import { Sequelize } from "sequelize-typescript";
import fs from "fs";
import { getEnv } from "../../utils/getEnv";
import Property from "../../data/models/property";

const env = getEnv("NODE_ENV");

class Database {
    private static db: Sequelize;
    private constructor() {}
    private static getDBConfig() {
        const configFile = fs.readFileSync(
            `${__dirname}/../../data/config/config.json`,
            "utf-8"
        );
        return JSON.parse(configFile)[env];
    }
    public static async init() {
        this.db = new Sequelize(
            env === "development" ? this.getDBConfig() : getEnv("DB_CONN_URL")
        );
        await this.db.authenticate();
        this.db.addModels([Property]);
        console.log("Connection to database has been established successfully.");
    }
    public static getInstance() {
        if (this.db) return this.db;
        throw Error("Tried to get database instance before initialization.");
    }
}

export default Database;
