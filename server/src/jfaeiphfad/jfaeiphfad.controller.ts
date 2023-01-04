import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JfaeiphfadService } from "./jfaeiphfad.service";
import { JfaeiphfadControllerBase } from "./base/jfaeiphfad.controller.base";

@swagger.ApiTags("jfaeiphfads")
@common.Controller("jfaeiphfads")
export class JfaeiphfadController extends JfaeiphfadControllerBase {
  constructor(
    protected readonly service: JfaeiphfadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
