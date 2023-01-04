import { Module } from "@nestjs/common";
import { JfaeiphfadModuleBase } from "./base/jfaeiphfad.module.base";
import { JfaeiphfadService } from "./jfaeiphfad.service";
import { JfaeiphfadController } from "./jfaeiphfad.controller";
import { JfaeiphfadResolver } from "./jfaeiphfad.resolver";

@Module({
  imports: [JfaeiphfadModuleBase],
  controllers: [JfaeiphfadController],
  providers: [JfaeiphfadService, JfaeiphfadResolver],
  exports: [JfaeiphfadService],
})
export class JfaeiphfadModule {}
