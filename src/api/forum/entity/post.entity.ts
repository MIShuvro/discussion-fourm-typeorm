import { AppBaseEntity } from "src/common/database/entity/base.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Thread } from "./thread.entity";


@Entity()
export class Post extends AppBaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar"
    })
    title: string;

    @Column({
        type: "text"
    })
    body: string

    @Column({
        type: "varchar"
    })
    slug: string

    @Column({
        type: "boolean"
    })
    is_anonymous: boolean

    @Column({
        default: 0
    })
    vote_count: number

    @Column({
        default: 0
    })
    views_count: number

    @Column({
        default: 0
    })
    up_vote_count: number

    @Column({
        default: 0
    })
    down_vote_count: number


    @OneToOne(()=> Thread)
    @JoinColumn({
        name:'thread_id'
    })
    thread_id: Thread
}