import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { VsfefefeefsfeResolverBase } from "./base/vsfefefeefsfe.resolver.base";
import { Vsfefefeefsfe } from "./base/Vsfefefeefsfe";
import { VsfefefeefsfeService } from "./vsfefefeefsfe.service";

@graphql.Resolver(() => Vsfefefeefsfe)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VsfefefeefsfeResolver extends VsfefefeefsfeResolverBase {
  constructor(
    protected readonly service: VsfefefeefsfeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
