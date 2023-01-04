import { Module } from "@nestjs/common";
import { EeModuleBase } from "./base/ee.module.base";
import { EeService } from "./ee.service";
import { EeController } from "./ee.controller";
import { EeResolver } from "./ee.resolver";

@Module({
  imports: [EeModuleBase],
  controllers: [EeController],
  providers: [EeService, EeResolver],
  exports: [EeService],
})
export class EeModule {}
