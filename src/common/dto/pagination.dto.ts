import { ApiProperty } from "@nestjs/swagger";

export class PaginationDto{

    @ApiProperty()
    page: number

    @ApiProperty({default: 10, required: false})
    limit?: number

}