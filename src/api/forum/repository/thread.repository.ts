
import { Injectable } from "@nestjs/common";
import { IPaginationOptions, paginate } from "nestjs-typeorm-paginate";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { DataSource, EntityManager, Repository } from "typeorm";
import { ThreadLists } from "../dto/res/thread-res.dto";
import { Thread } from "../entity/thread.entity";

@Injectable()
export class ThreadRepository extends Repository<Thread>{
    constructor(private dataSource: DataSource) {
        super(Thread, dataSource.manager);
    }

    async getAll(pagination: IPaginationOptions) {
        let queryBuilder = this.createQueryBuilder('thread')
        queryBuilder.select(['thread.id', 'thread.title', 'thread.slug']);
        let threads = await paginate<any>(queryBuilder, pagination);
        return threads;
    }
}