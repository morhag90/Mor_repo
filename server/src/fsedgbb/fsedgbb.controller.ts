import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FsedgbbService } from "./fsedgbb.service";
import { FsedgbbControllerBase } from "./base/fsedgbb.controller.base";

@swagger.ApiTags("fsedgbbs")
@common.Controller("fsedgbbs")
export class FsedgbbController extends FsedgbbControllerBase {
  constructor(
    protected readonly service: FsedgbbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
