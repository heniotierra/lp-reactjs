import React from "react";

export type PaginatedList<T> = {
  rows: T[];
  count: number;
}

export type ListDataType<T> = {
  data: T;
  loaded: boolean;
  filterBy?: string;
  offset?: number;
};

export type DetailsDataType<T> = {
  data: T | null;
  loaded: boolean;
};

export type Property = {
  id: number;
  price: number;
  baths: number;
  beds: number;
  neighborhood: string;
  address: string;
  city: string;
  zipcode: string;
  available: string;
  image: string;
  type: string;
  yearBuilt: number;
  heating: string;
  parking: string;
  lot: string;
  stories: number;
  anualTax: number;
  parcelNumber: number;
  lastSold: Date;
  hasGarage: boolean;
  pool: boolean;
  virtualTourLink: string;
  totalVisits: string;
  images: string[];
}

export type StringState = [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];

export type PropertiesFilterTypes = "neighborhood" | "city" | "zipcode" | "type";
