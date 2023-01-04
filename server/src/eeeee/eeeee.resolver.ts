import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EeeeeResolverBase } from "./base/eeeee.resolver.base";
import { Eeeee } from "./base/Eeeee";
import { EeeeeService } from "./eeeee.service";

@graphql.Resolver(() => Eeeee)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EeeeeResolver extends EeeeeResolverBase {
  constructor(
    protected readonly service: EeeeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
