import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateRowDto {
  @IsString()
  @IsNotEmpty()
  cell: string;

  @IsString()
  @IsOptional()
  oldValue?: string;

  @IsString()
  @IsNotEmpty()
  newValue: string;

  @IsString()
  @IsNotEmpty()
  sheetName: string;

  @IsString()
  @IsNotEmpty()
  editedBy: string;
}
