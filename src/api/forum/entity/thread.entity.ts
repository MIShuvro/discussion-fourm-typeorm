import { AppBaseEntity } from "src/common/database/entity/base.entity";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Thread extends AppBaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar"
    })
    title: string

    @Column({
        type: "varchar",
        unique: true
    })
    slug: string;

    @BeforeInsert()
    beforeInsert() {
        //  this.slug = this.title.toLowerCase().split(" ").join("-")
    }

}