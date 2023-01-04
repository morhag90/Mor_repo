import { Module } from "@nestjs/common";
import { EeeeeModuleBase } from "./base/eeeee.module.base";
import { EeeeeService } from "./eeeee.service";
import { EeeeeController } from "./eeeee.controller";
import { EeeeeResolver } from "./eeeee.resolver";

@Module({
  imports: [EeeeeModuleBase],
  controllers: [EeeeeController],
  providers: [EeeeeService, EeeeeResolver],
  exports: [EeeeeService],
})
export class EeeeeModule {}
