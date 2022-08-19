import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thread } from './entity/thread.entity';
import { ThreadRepository } from './repository/thread.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Thread
        ])
    ],
    controllers: [],
    providers: [ThreadRepository]
})
export class ForumModule {}
