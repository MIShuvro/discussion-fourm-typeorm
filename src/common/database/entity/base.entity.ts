import { CreateDateColumn } from "typeorm";


export class AppBaseEntity{

    @CreateDateColumn({type: 'timestamp', select: true})
    createdAt: Date;

    @CreateDateColumn({type: 'timestamp', select: true})
    updatedAt: Date;
}