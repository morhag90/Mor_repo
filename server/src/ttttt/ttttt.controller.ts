import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TttttService } from "./ttttt.service";
import { TttttControllerBase } from "./base/ttttt.controller.base";

@swagger.ApiTags("ttttts")
@common.Controller("ttttts")
export class TttttController extends TttttControllerBase {
  constructor(
    protected readonly service: TttttService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
