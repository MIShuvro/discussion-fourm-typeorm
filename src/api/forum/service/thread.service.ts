import { paginate } from 'nestjs-typeorm-paginate';
import { Delete, Injectable, NotFoundException } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { ThreadReqDto } from "../dto/req/thread-req.dto";
import { ThreadLists, ThreadResDto } from "../dto/res/thread-res.dto";
import { ThreadRepository } from "../repository/thread.repository";
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { SwaggerBaseApiResponse } from 'src/common/dto/base-api-response.dto';


@Injectable()
export class ThreadService {
    constructor(private threadRepository: ThreadRepository) {
    }

    async create(dto: ThreadReqDto): Promise<ThreadResDto> {
        (dto as any).slug = dto.title.toLowerCase().split(" ").join("-")
        let thread = await this.threadRepository.save(dto)
        return plainToInstance(ThreadResDto, thread, {
            excludeExtraneousValues: true,
            enableImplicitConversion: true
        })
    }

    async findOne(threadId: number): Promise<ThreadResDto> {
        let thread = await this.threadRepository.findOne({ where: { id: threadId } })
        if (!thread) {
            throw new NotFoundException()
        }
        return plainToInstance(ThreadResDto, thread, {
            excludeExtraneousValues: true,
            enableImplicitConversion: true
        })
    }

    async find(): Promise<ThreadLists> {
        let threads = await this.threadRepository.find()

        return plainToInstance(ThreadLists, { threads }, {
            excludeExtraneousValues: true,
            enableImplicitConversion: true
        })
    }

    async updateOne(id: number, dto: ThreadReqDto): Promise<ThreadResDto> {

        let thread = await this.threadRepository.findOne({ where: { id } });

        if (!thread) {
            throw new NotFoundException()
        }
        (dto as any).slug = dto.title.toLowerCase().split(" ").join("-")
        let res = await this.threadRepository.update({ id }, dto)
        if (res.affected > 0) {
            thread = await await this.threadRepository.findOne({ where: { id } });
        }
        return plainToInstance(ThreadResDto, thread, { excludeExtraneousValues: true, enableImplicitConversion: true })
    }

    async deleteOne(id: number): Promise<String> {
        let thread = await this.threadRepository.findOne({ where: { id } });
        if (!thread) {
            throw new NotFoundException()
        }
        await this.threadRepository.delete({ id })
        return 'Deleted'
    }

    async getAll(paginate: PaginationDto): Promise<ThreadLists> {
        let threads = await this.threadRepository.getAll(paginate as any)
        return plainToInstance(ThreadLists, { threads: threads.items, paginate: threads.meta }, {
            excludeExtraneousValues: true,
            enableImplicitConversion: true
        })
    }
} 