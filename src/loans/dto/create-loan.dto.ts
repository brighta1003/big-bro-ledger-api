import {
  IsString,
  Matches,
  IsInt,
  Min,
  IsDateString,
} from 'class-validator';

export class CreateLoanDto {
  @IsString({ message: '借款人必須是文字' })
  @Matches(/\S/, { message: '借款人不能是空白' })
  borrower!: string;

  @IsString({ message: '借出物品必須是文字' })
  @Matches(/\S/, { message: '借出物品不能是空白' })
  item!: string;

  @IsInt({ message: '金額必須是整數' })
  @Min(1, { message: '金額必須至少為 1 元' })
  amount!: number;

  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: '借出日期格式必須為 YYYY-MM-DD',
  })
  @IsDateString(
    { strict: true },
    { message: '借出日期必須是有效日期' },
  )
  loanDate!: string;
}