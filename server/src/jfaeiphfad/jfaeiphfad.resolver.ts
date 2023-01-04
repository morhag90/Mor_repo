import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JfaeiphfadResolverBase } from "./base/jfaeiphfad.resolver.base";
import { Jfaeiphfad } from "./base/Jfaeiphfad";
import { JfaeiphfadService } from "./jfaeiphfad.service";

@graphql.Resolver(() => Jfaeiphfad)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JfaeiphfadResolver extends JfaeiphfadResolverBase {
  constructor(
    protected readonly service: JfaeiphfadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
