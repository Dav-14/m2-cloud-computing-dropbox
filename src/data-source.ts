import "reflect-metadata"
import  { DataSource,DataSourceOptions } from "typeorm"
import { File } from "./entity/File"
//Init migration
import { Init1688136409916 } from "./migration/1688136409916-init"

function getConfig(): DataSourceOptions {
    return  {
        type: getStringConfig("DB_TYPE") as any,//"postgres",
        host: getStringConfig("DB_HOST"),//"localhost"
        port: getNumberConfig("DB_PORT"),//5432
        username: getStringConfig("DB_USERNAME"),//"test"
        password: getStringConfig("DB_PASSWORD"),//"test
        database: getStringConfig("DB_DATABASE"),//"test
        synchronize: true,
        logging: false,
        entities: [File],
        migrations: [Init1688136409916],
        subscribers: [],
    }
}

export const AppDataSource = new DataSource(getConfig())
