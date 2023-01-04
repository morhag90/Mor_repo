import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VsfefefeefsfeServiceBase } from "./base/vsfefefeefsfe.service.base";

@Injectable()
export class VsfefefeefsfeService extends VsfefefeefsfeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
