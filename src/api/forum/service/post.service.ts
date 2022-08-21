import { plainToInstance } from 'class-transformer';
import { PostReqDto } from './../dto/req/post-req.dto';
import { Injectable } from "@nestjs/common";
import { PostRepository } from "../repository/post.repository";
import { PostResDto } from '../dto/res/post-res.dto';


@Injectable()
export class PostService {
    constructor(private repository: PostRepository) { }

    async create(dto: PostReqDto): Promise<PostResDto> {
        (dto as any).slug = dto.title.toLowerCase().split(" ").join("-")
        let post = await this.repository.save(dto as any)
        console.log(post);
        return plainToInstance(PostResDto, post, {
            enableImplicitConversion: true,
            excludeExtraneousValues: true
        })

    }
}