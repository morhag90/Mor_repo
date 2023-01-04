import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JfaeiphfadServiceBase } from "./base/jfaeiphfad.service.base";

@Injectable()
export class JfaeiphfadService extends JfaeiphfadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
