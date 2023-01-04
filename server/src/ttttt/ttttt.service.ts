import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TttttServiceBase } from "./base/ttttt.service.base";

@Injectable()
export class TttttService extends TttttServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
