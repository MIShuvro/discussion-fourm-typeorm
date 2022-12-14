import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Post } from "../entity/post.entity";


@Injectable()
export class PostRepository extends Repository<Post>{
    constructor(private dataSource: DataSource) {
        super(Post, dataSource.manager);
    }

    async getAllPost(paginationOptions: IPaginationOptions) {
        let posts = this.createQueryBuilder('posts')
        
    }
}