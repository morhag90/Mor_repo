import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RrrrServiceBase } from "./base/rrrr.service.base";

@Injectable()
export class RrrrService extends RrrrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
