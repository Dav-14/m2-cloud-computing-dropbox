import { MigrationInterface, QueryRunner } from "typeorm"

export class Init1688136409916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Create File table
        await queryRunner.query(`CREATE TABLE "file" ("id" uuid NOT NULL, "filename" character varying NOT NULL, "mimetype" character varying NOT NULL, "hash" character varying NOT NULL, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Drop File table
        await queryRunner.query(`DROP TABLE "file"`)
    }

}
