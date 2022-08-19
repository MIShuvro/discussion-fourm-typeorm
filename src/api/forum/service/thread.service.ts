import { Injectable } from "@nestjs/common";
import { ThreadReqDto } from "../dto/req/thread-req.dto";
import { ThreadResDto } from "../dto/res/thread-res.dto";
import { ThreadRepository } from "../repository/thread.repository";


@Injectable()
export class ThreadService {
    constructor(private threadRepository: ThreadRepository) { }

    async create(dto: ThreadReqDto): Promise<ThreadResDto> {
        return
    }
}