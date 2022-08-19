import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Thread } from "../entity/thread.entity";

@Injectable()
export class ThreadRepository extends Repository<Thread>{
    constructor(private dataSource: DataSource){
        super(Thread, dataSource.manager)
    }
}