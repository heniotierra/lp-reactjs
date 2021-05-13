import { gql } from "apollo-boost";
import React, { PropsWithChildren, ReactNode, useCallback } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { DetailsDataType, ListDataType, PaginatedList, Property } from "../types";

type PropertiesContextType = {
  listing: ListDataType<PaginatedList<Property>> & { searchTerms: string; };
  favorites: ListDataType<Property[]>;
  lastVisited: ListDataType<Property[]>;
  details: DetailsDataType<Property>;
  fetchListingProperties: (searchTerms: string, filterBy: string, offset: number) => Promise<void>;
  fetchProperty: (id: number) => Promise<void>;
  setProperty: (property: Property) => void;
  fetchHomeProperties: () => Promise<void>;
}

const initialState: PropertiesContextType = {
  listing: {
    data: {
      rows: [],
      count: 0,
    },
    loaded: false,
    searchTerms: "",
    offset: 0,
  },
  favorites: {
    loaded: false,
    data: [],
  },
  lastVisited: {
    loaded: false,
    data: [],
  },
  details: {
    loaded: false,
    data: null,
  },
  fetchListingProperties: () => {
    throw new Error("Checklist context has not yet been initialized.");
  },
  fetchHomeProperties: () => {
    throw new Error("Checklist context has not yet been initialized.");
  },
  fetchProperty: (_: number) => {
    throw new Error("Checklist context has not yet been initialized.");
  },
  setProperty: (_: Property) => {
    throw new Error("Checklist context has not yet been initialized.");
  },
};

const FIND_PROPERTIES = gql`
  query FindProperties($searchTerms: String!, $filterBy: String!, $offset: Float!) {
    findProperties(searchTerms: $searchTerms, filterBy: $filterBy, offset: $offset) {    
      rows {
        id
        price
        baths
        beds
        neighborhood
        address
        city
        zipcode
        available
        image
        type
        yearBuilt
        heating
        parking
        lot
        stories
        anualTax
        parcelNumber
        lastSold
        hasGarage
        pool
        virtualTourLink
        totalVisits
        images
      }
      count
    }
  }
`;

const FIND_PROPERTY = gql`
  query FindProperty($id: Float!) {
    findProperty(id: $id) {
      price
      baths
      beds
      neighborhood
      address
      city
      zipcode
      available
      image
      type
      yearBuilt
      heating
      parking
      lot
      stories
      anualTax
      parcelNumber
      lastSold
      hasGarage
      pool
      virtualTourLink
      totalVisits
      images
    }
  }
`;

const FIND_FAVORITE_PROPERTIES = gql`
  query FindFavoriteProperties {
    findFavoriteProperties {
      id
      price
      baths
      beds
      neighborhood
      address
      city
      zipcode
      available
      image
      type
      yearBuilt
      heating
      parking
      lot
      stories
      anualTax
      parcelNumber
      lastSold
      hasGarage
      pool
      virtualTourLink
      totalVisits
      images
    }
  }
`;

const FIND_LAST_VISITED_PROPERTIES = gql`
  query FindLastVisitedProperties {
    findLastVisitedProperties {
      id
      price
      baths
      beds
      neighborhood
      address
      city
      zipcode
      available
      image
      type
      yearBuilt
      heating
      parking
      lot
      stories
      anualTax
      parcelNumber
      lastSold
      hasGarage
      pool
      virtualTourLink
      totalVisits
      images
    }
  }
`;

const PropertiesContext = React.createContext(initialState);

export const usePropertiesContext = () => React.useContext(PropertiesContext);

export default function PropertiesProvider({ children }: PropsWithChildren<ReactNode>) {
  const { query } = useApolloClient();
  
  const [propertiesData, setPropertiesData] = React.useState<PropertiesContextType>(
    initialState
  );

  const fetchListingProperties = async (searchTerms: string, filterBy: string, offset: number) => {
    if (!searchTerms || !filterBy || isNaN(offset)) return;

    if (!propertiesData.favorites.loaded) {
      setPropertiesData({
        ...propertiesData,
        favorites: {
          ...propertiesData.favorites,
          loaded: false,
        },
        listing: {
          ...propertiesData.listing,
          loaded: false,
          searchTerms,
          filterBy,
          offset,
        },
      });
    
      const { data: favorites } = await query({
        query: FIND_FAVORITE_PROPERTIES,
      });

      const { data: listing } = await query({
        query: FIND_PROPERTIES,
        variables: {
          searchTerms,
          filterBy,
          offset,
        },
        fetchPolicy: "no-cache",
      });

      setPropertiesData({
        ...propertiesData,
        favorites: {
          ...propertiesData.favorites,
          data: favorites.findFavoriteProperties,
          loaded: true,
        },
        listing: {
          ...propertiesData.listing,
          data: listing.findProperties,
          loaded: true,
        },
      });

      return;
    }

    setPropertiesData({
      ...propertiesData,
      listing: {
        ...propertiesData.listing,
        loaded: false,
        searchTerms,
        filterBy,
        offset,
      },
    });

    const { data: listing } = await query({
      query: FIND_PROPERTIES,
      variables: {
        searchTerms,
        filterBy,
        offset,
      },
      fetchPolicy: "no-cache",
    });
    
    setPropertiesData({
      ...propertiesData,
      listing: {
        ...propertiesData.listing,
        data: listing.findProperties,
        loaded: true,
      },
    });
  };

  const fetchHomeProperties = async () => {
    setPropertiesData({
      ...propertiesData,
      favorites: {
        ...propertiesData.favorites,
        loaded: false,
      },
      lastVisited: {
        ...propertiesData.lastVisited,
        loaded: false,
      },
    });
    
    const { data: favorites } = await query({
      query: FIND_FAVORITE_PROPERTIES,
    });

    const { data: lastVisited } = await query({
      query: FIND_LAST_VISITED_PROPERTIES,
    });
    
    setPropertiesData({
      ...propertiesData,
      favorites: {
        ...propertiesData.favorites,
        data: favorites.findFavoriteProperties,
        loaded: true,
      },
      lastVisited: {
        ...propertiesData.lastVisited,
        data: lastVisited.findLastVisitedProperties,
        loaded: true,
      },
    });
  };

  const fetchProperty = async (id: number) => {
    const property = propertiesData.listing.data.rows.find(
      (property) => property.id === id
    );

    if (property) {
      if (property.id !== propertiesData.details.data?.id) {
        setProperty(property);
      }
      return;
    } 
    
    setPropertiesData({
      ...propertiesData,
      details: {
        ...propertiesData.details,
        loaded: false,
      },
    });

    const { data } = await query({
      query: FIND_PROPERTY,
      variables: {
        id,
      }
    });
    
    setPropertiesData({
      ...propertiesData,
      details: {
        ...propertiesData.details,
        data: data.findProperty,
        loaded: true,
      },
    });
  };

  const setProperty = useCallback((property: Property) => {
    setPropertiesData({
      ...propertiesData,
      details: {
        ...propertiesData.details,
        data: property,
      },
    });
  }, [propertiesData]);

  return (
    <PropertiesContext.Provider
      value={{
        ...propertiesData,
        fetchListingProperties,
        fetchProperty,
        setProperty,
        fetchHomeProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}
