import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TttttResolverBase } from "./base/ttttt.resolver.base";
import { Ttttt } from "./base/Ttttt";
import { TttttService } from "./ttttt.service";

@graphql.Resolver(() => Ttttt)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TttttResolver extends TttttResolverBase {
  constructor(
    protected readonly service: TttttService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
