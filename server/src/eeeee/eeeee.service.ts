import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EeeeeServiceBase } from "./base/eeeee.service.base";

@Injectable()
export class EeeeeService extends EeeeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
