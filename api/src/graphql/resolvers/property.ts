import {
  Resolver,
  Query,
  Arg,
} from "type-graphql";
import {
  findFavoriteProperties,
  findLastVisitedProperties,
  findProperties,
  findProperty,
} from "../../services/property/find";
import {
  PropertyOutput,
  PropertyPaginatedList
} from "../schema/property";
import { PropertiesFilterTypes } from "../types";

@Resolver()
export class PropertyResolver {
  @Query(() => PropertyPaginatedList)
  public findProperties(
    @Arg("searchTerms") searchTerms: string,
    @Arg("filterBy") filterBy: PropertiesFilterTypes,
    @Arg("offset") offset: number
  ) {
    return findProperties(searchTerms, filterBy, offset);
  }

  @Query(() => PropertyOutput)
  public findProperty(@Arg("id") id: number) {
    return findProperty(id);
  }

  @Query(() => [PropertyOutput])
  public findFavoriteProperties() {
    return findFavoriteProperties();
  }

  @Query(() => [PropertyOutput])
  public findLastVisitedProperties() {
    return findLastVisitedProperties();
  }
}
