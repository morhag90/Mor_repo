/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VsfefefeefsfeWhereInput } from "./VsfefefeefsfeWhereInput";
import { Type } from "class-transformer";
import { VsfefefeefsfeOrderByInput } from "./VsfefefeefsfeOrderByInput";

@ArgsType()
class VsfefefeefsfeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VsfefefeefsfeWhereInput,
  })
  @Field(() => VsfefefeefsfeWhereInput, { nullable: true })
  @Type(() => VsfefefeefsfeWhereInput)
  where?: VsfefefeefsfeWhereInput;

  @ApiProperty({
    required: false,
    type: [VsfefefeefsfeOrderByInput],
  })
  @Field(() => [VsfefefeefsfeOrderByInput], { nullable: true })
  @Type(() => VsfefefeefsfeOrderByInput)
  orderBy?: Array<VsfefefeefsfeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VsfefefeefsfeFindManyArgs };
