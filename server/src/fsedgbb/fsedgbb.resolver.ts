import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FsedgbbResolverBase } from "./base/fsedgbb.resolver.base";
import { Fsedgbb } from "./base/Fsedgbb";
import { FsedgbbService } from "./fsedgbb.service";

@graphql.Resolver(() => Fsedgbb)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FsedgbbResolver extends FsedgbbResolverBase {
  constructor(
    protected readonly service: FsedgbbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
