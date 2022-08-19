import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';


export class ThreadReqDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}
