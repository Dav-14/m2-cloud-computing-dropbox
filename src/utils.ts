function getStringConfig(key: string): string{
    return process.env[key] ?? "";
}

function getBoolConfig(key: string): boolean{
    return process.env[key] == "true";
}

function getNumberConfig(key: string): number{
    return process.env[key] == undefined ? 0 : parseInt(process.env[key] ?? "0");
}