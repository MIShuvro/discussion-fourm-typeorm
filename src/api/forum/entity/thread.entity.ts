import { AppBaseEntity } from "src/common/database/entity/base.entity";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: 'threads'
})
export class Thread extends AppBaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        nullable: false
    })
    title: string

    @Column({
        type: "varchar",
        nullable: false
    })
    slug: string;

    @BeforeInsert()
    async beforeInsert(){
        this.slug = this.title.toLowerCase().split(" ").join("-")
    }

}