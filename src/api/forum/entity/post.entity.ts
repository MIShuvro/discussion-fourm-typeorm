import { AppBaseEntity } from "src/common/database/entity/base.entity";
import { Column, PrimaryGeneratedColumn } from "typeorm";


export class Post extends AppBaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        nullable: false
    })
    title: string;

    @Column({
        type: "text",
        nullable: false
    })
    body: string

    @Column({
        type: "varchar",
        nullable: false
    })
    slug: string

    @Column({
        type: "boolean",
        nullable: true
    })
    is_anonymous: boolean

    @Column({
        type: "number",
        nullable: true
    })
    vote_count: number

    @Column({
        type: "number",
        nullable: true
    })
    views_count: number

    @Column({
        type: "number",
        nullable: true
    })
    up_vote_count: number

    @Column({
        type: "number",
        nullable: true
    })
    down_vote_count: number
}