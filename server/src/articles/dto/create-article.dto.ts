import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  isPublished: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fkAuthorId: string;

  @ApiProperty({ required: false, nullable: true })
  fkImageId?: number;
}
