export type PropertiesFilterTypes = "neighborhood" | "city" | "zipCode" | "type";

export interface IPaginatedList {
  rows: any[];
  count: number;
}
