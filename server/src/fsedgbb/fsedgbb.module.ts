import { Module } from "@nestjs/common";
import { FsedgbbModuleBase } from "./base/fsedgbb.module.base";
import { FsedgbbService } from "./fsedgbb.service";
import { FsedgbbController } from "./fsedgbb.controller";
import { FsedgbbResolver } from "./fsedgbb.resolver";

@Module({
  imports: [FsedgbbModuleBase],
  controllers: [FsedgbbController],
  providers: [FsedgbbService, FsedgbbResolver],
  exports: [FsedgbbService],
})
export class FsedgbbModule {}
