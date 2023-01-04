import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EeService } from "./ee.service";
import { EeControllerBase } from "./base/ee.controller.base";

@swagger.ApiTags("ees")
@common.Controller("ees")
export class EeController extends EeControllerBase {
  constructor(
    protected readonly service: EeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
