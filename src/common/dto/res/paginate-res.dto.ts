import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";

export class PaginateResDto {

    @ApiProperty()
    @Expose()
    totalItems:   number;

    @ApiProperty()
    @Expose()
    itemCount:    number;

    @ApiProperty()
    @Expose()
    itemsPerPage: number;

    @ApiProperty()
    @Expose()
    totalPages:   number;

    @ApiProperty()
    @Expose()
    @Transform(value=> value.obj.currentPage)
    current_page:  number;
}
