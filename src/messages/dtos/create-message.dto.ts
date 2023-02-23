// DTO => Data Transfer Object
import { IsString } from 'class-validator';

export class CreateMesssageDto {
  @IsString()
  content: string;
}
