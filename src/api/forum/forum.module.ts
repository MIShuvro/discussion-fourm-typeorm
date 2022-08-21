import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controller/post.controller';
import { ThreadController } from './controller/thread.controller';
import { Post } from './entity/post.entity';
import { Thread } from './entity/thread.entity';
import { PostRepository } from './repository/post.repository';
import { ThreadRepository } from './repository/thread.repository';
import { PostService } from './service/post.service';
import { ThreadService } from './service/thread.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Thread, Post
        ])
    ],
    controllers: [ThreadController, PostController],
    providers: [ThreadRepository, ThreadService, PostRepository, PostService]
})
export class ForumModule { }
