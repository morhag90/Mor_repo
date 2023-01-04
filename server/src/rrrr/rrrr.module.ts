import { Module } from "@nestjs/common";
import { RrrrModuleBase } from "./base/rrrr.module.base";
import { RrrrService } from "./rrrr.service";
import { RrrrController } from "./rrrr.controller";
import { RrrrResolver } from "./rrrr.resolver";

@Module({
  imports: [RrrrModuleBase],
  controllers: [RrrrController],
  providers: [RrrrService, RrrrResolver],
  exports: [RrrrService],
})
export class RrrrModule {}
