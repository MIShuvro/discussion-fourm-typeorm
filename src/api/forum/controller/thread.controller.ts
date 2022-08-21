import { ThreadResDto, ThreadLists } from './../dto/res/thread-res.dto';
import { ThreadReqDto } from './../dto/req/thread-req.dto';
import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, UseInterceptors } from "@nestjs/common";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ThreadService } from "../service/thread.service";
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { BaseApiResponse, SwaggerBaseApiErrorResponse, SwaggerBaseApiResponse } from 'src/common/dto/base-api-response.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@ApiTags('Admin')
@UseInterceptors(ResponseInterceptor)
@Controller({ path: 'admin/threads', version: '1' })
export class ThreadController {
    constructor(private threadService: ThreadService) { }

    @Post()
    @ApiCreatedResponse({ type: SwaggerBaseApiResponse(ThreadResDto, HttpStatus.CREATED) })
    @ApiInternalServerErrorResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR) })
    async createThread(@Body() dto: ThreadReqDto): Promise<BaseApiResponse<ThreadResDto>> {
        let thread = await this.threadService.create(dto);

        return {
            message: 'Thread Created',
            data: thread
        }
    }

    @Get('/:id')
    @ApiOkResponse({ type: SwaggerBaseApiResponse(ThreadResDto, HttpStatus.OK) })
    @ApiNotFoundResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.NOT_FOUND) })
    async findOne(@Param('id') threadId: number): Promise<BaseApiResponse<ThreadResDto>> {
        let thread = await this.threadService.findOne(threadId)
        return {
            message: 'Thread fetch success',
            data: thread
        }
    }

    @Get()
    @ApiOkResponse({ type: SwaggerBaseApiResponse(ThreadLists, HttpStatus.OK) })
    @ApiNotFoundResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.NOT_FOUND) })
    async find(@Query() paginate: PaginationDto): Promise<BaseApiResponse<ThreadLists>> {
        let threads = await this.threadService.getAll(paginate)

        return {
            message: 'Thread Lists',
            data: threads
        }
    }

    @Patch('/:id')
    @ApiOkResponse({type: SwaggerBaseApiResponse(ThreadResDto, HttpStatus.OK)})
    @ApiNotFoundResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.NOT_FOUND) })
    @ApiInternalServerErrorResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR) })
    async updateOne(@Param('id') id: number, @Body() dto: ThreadReqDto): Promise<BaseApiResponse<ThreadResDto>>{
        let thread = await this.threadService.updateOne(id, dto)
        return{
            message: 'Thread Updated',
            data: thread
        }
    }

    @Delete('/:id')
    @ApiOkResponse({type: SwaggerBaseApiResponse(String, HttpStatus.OK)})
    @ApiNotFoundResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.NOT_FOUND) })
    @ApiInternalServerErrorResponse({ type: SwaggerBaseApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR) })
    async delete(@Param('id') id: number): Promise<BaseApiResponse<String>>{

        await this.threadService.deleteOne(id)

        return{
            message: 'Delete Success',
            data:null
        }
    }
}