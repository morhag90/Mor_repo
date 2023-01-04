import { Module } from "@nestjs/common";
import { VsfefefeefsfeModuleBase } from "./base/vsfefefeefsfe.module.base";
import { VsfefefeefsfeService } from "./vsfefefeefsfe.service";
import { VsfefefeefsfeController } from "./vsfefefeefsfe.controller";
import { VsfefefeefsfeResolver } from "./vsfefefeefsfe.resolver";

@Module({
  imports: [VsfefefeefsfeModuleBase],
  controllers: [VsfefefeefsfeController],
  providers: [VsfefefeefsfeService, VsfefefeefsfeResolver],
  exports: [VsfefefeefsfeService],
})
export class VsfefefeefsfeModule {}
