import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class File {

    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    filename!: string

    @Column()
    mimetype!: string

    @Column()
    hash!: string

}
