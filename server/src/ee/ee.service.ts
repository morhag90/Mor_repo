import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EeServiceBase } from "./base/ee.service.base";

@Injectable()
export class EeService extends EeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
