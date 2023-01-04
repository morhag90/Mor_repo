import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RrrrService } from "./rrrr.service";
import { RrrrControllerBase } from "./base/rrrr.controller.base";

@swagger.ApiTags("rrrrs")
@common.Controller("rrrrs")
export class RrrrController extends RrrrControllerBase {
  constructor(
    protected readonly service: RrrrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
