import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FsedgbbServiceBase } from "./base/fsedgbb.service.base";

@Injectable()
export class FsedgbbService extends FsedgbbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
