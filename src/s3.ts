import * as Minio from 'minio'
import * as dotenv from "dotenv";

if (process.env.NODE_ENV !== 'production'){
    dotenv.config();
}

const config = GetConfig();
console.log("config", config);
const minioClient = new Minio.Client(config);


function GetConfig(): Minio.ClientOptions {

    return {
        endPoint: getStringConfig('MINIO_ENDPOINT'),
        port: getNumberConfig('JCLOUDS_PORT'),
        useSSL: getBoolConfig('MINIO_USE_SSL'),
        accessKey: getStringConfig('JCLOUDS_IDENTITY'),
        secretKey: getStringConfig('JCLOUDS_CREDENTIAL'),
        
    };
    
}


function GetClient() {
    return minioClient;
}




export { GetClient };