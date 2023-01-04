import { Module } from "@nestjs/common";
import { TttttModuleBase } from "./base/ttttt.module.base";
import { TttttService } from "./ttttt.service";
import { TttttController } from "./ttttt.controller";
import { TttttResolver } from "./ttttt.resolver";

@Module({
  imports: [TttttModuleBase],
  controllers: [TttttController],
  providers: [TttttService, TttttResolver],
  exports: [TttttService],
})
export class TttttModule {}
