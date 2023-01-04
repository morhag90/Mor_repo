import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VsfefefeefsfeService } from "./vsfefefeefsfe.service";
import { VsfefefeefsfeControllerBase } from "./base/vsfefefeefsfe.controller.base";

@swagger.ApiTags("vsfefefeefsfes")
@common.Controller("vsfefefeefsfes")
export class VsfefefeefsfeController extends VsfefefeefsfeControllerBase {
  constructor(
    protected readonly service: VsfefefeefsfeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
