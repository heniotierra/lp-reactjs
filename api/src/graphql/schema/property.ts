import { ObjectType, Field } from "type-graphql";
import Property from "../../data/models/property";
import { IPaginatedList } from "../types";

@ObjectType()
export class PropertyOutput {
    @Field()
    id?: number;
    @Field()
    price!: number;
    @Field()
    baths!: number;
    @Field()
    beds!: number;
    @Field()
    neighborhood!: string;
    @Field()
    address!: string;
    @Field()
    city!: string;
    @Field()
    zipcode!: string;
    @Field()
    available!: string;
    @Field()
    image!: string;
    @Field()
    type!: string;
    @Field()
    yearBuilt!: number;
    @Field()
    heating!: string;
    @Field()
    parking!: string;
    @Field()
    lot!: string;
    @Field()
    stories!: number;
    @Field()
    anualTax!: number;
    @Field()
    parcelNumber!: number;
    @Field()
    lastSold!: Date;
    @Field()
    hasGarage!: boolean;
    @Field()
    pool!: boolean;
    @Field()
    virtualTourLink!: string;
    @Field()
    totalVisits!: string;
    @Field(() => [String])
    images!: string[];
}

@ObjectType()
export class PropertyPaginatedList implements IPaginatedList {
    @Field(() => [PropertyOutput])
    rows!: Property[];
    @Field()
    count!: number;
}
