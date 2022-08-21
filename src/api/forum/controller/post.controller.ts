import { BaseApiResponse, SwaggerBaseApiErrorResponse, SwaggerBaseApiResponse } from 'src/common/dto/base-api-response.dto';
import { ResponseInterceptor } from "@common/interceptors/response.interceptor";
import { Body, Controller, HttpStatus, Post, UseInterceptors } from "@nestjs/common";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { version } from "os";
import { PostResDto } from '../dto/res/post-res.dto';
import { PostReqDto } from '../dto/req/post-req.dto';
import { PostService } from '../service/post.service';


@Controller({path:'posts', version: "1"})
@ApiTags('Post')
@UseInterceptors(ResponseInterceptor)
export class PostController{

    constructor(private postService: PostService){}

    @Post()
    @ApiCreatedResponse({type: SwaggerBaseApiResponse(PostResDto, HttpStatus.CREATED)})
    @ApiInternalServerErrorResponse({type: SwaggerBaseApiErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR)})
    async create(@Body() dto: PostReqDto): Promise<BaseApiResponse<PostResDto>>{
        let post = await this.postService.create(dto)
        return{
            message: 'Post Created',
            data: post
        }
    }

}