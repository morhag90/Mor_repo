import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EeeeeService } from "./eeeee.service";
import { EeeeeControllerBase } from "./base/eeeee.controller.base";

@swagger.ApiTags("eeeees")
@common.Controller("eeeees")
export class EeeeeController extends EeeeeControllerBase {
  constructor(
    protected readonly service: EeeeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
