import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RrrrResolverBase } from "./base/rrrr.resolver.base";
import { Rrrr } from "./base/Rrrr";
import { RrrrService } from "./rrrr.service";

@graphql.Resolver(() => Rrrr)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RrrrResolver extends RrrrResolverBase {
  constructor(
    protected readonly service: RrrrService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
