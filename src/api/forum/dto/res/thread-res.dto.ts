import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform } from 'class-transformer';
import { PaginateResDto } from 'src/common/dto/res/paginate-res.dto';


export class ThreadResDto {

  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  slug: string;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}

export class ThreadLists {

  @ApiProperty({ type: [ThreadResDto] })
  @Expose()
  @Transform(value => value.obj.threads)
  threads: ThreadResDto[]

  @ApiProperty()
  @Expose()
  paginate: PaginateResDto
}
