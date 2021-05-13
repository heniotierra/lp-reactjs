import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { PageWrapper, CardsWrapper } from "../../components/wrappers";
import { paginationLimit } from "../../constants";
import Pagination from "../../components/pagination";
import { Button } from "../../components/buttons";
import LoaderSpinner from "../../components/loader";
import { H2, Text } from "../../components/typography";
import { usePropertiesContext } from "../../contexts/properties";
import { PaginatedList, Property, StringState } from "../../types";
import FilteredSearch from "../../components/inputs/FilteredSearch";
import { PropertiesListItem } from "../../components/listItem/intex";
import { PropertiesCard } from "../../components/cards";

const filterOptions = [{
  label: "City",
  value: "city",
},
{
  label: "Neighborhood",
  value: "neighborhood",
},
{
  label: "ZIP Code",
  value: "zipcode",
}];

const Listing = () => {
  const {
    filterBy,
    searchTerms,
  } = queryString.parse(window.location.search);
  const localFilterByState = useState<string>(filterBy as string);
  const localSearchTermsState = useState<string>(searchTerms as string);
  const [filterByLabel, setFilterByLabel] = useState<string>(filterBy as string);
  const [searchTermsLabel, setSearchTermsLabel] = useState<string>(filterBy as string);

  const [localFilterBy] = localFilterByState;
  const [localSearchTerms] = localSearchTermsState;

  const propertiesCtx = usePropertiesContext();

  const favorites = propertiesCtx.favorites.data as Property[];

  const history = useHistory();

  const { rows, count } = propertiesCtx.listing.data as PaginatedList<Property>;

  const search = async (
    searchTerms: string,
    filterBy: string,
    offset?: number
  ) => {
    offset = typeof offset === "undefined" || (searchTerms !== propertiesCtx.listing.searchTerms ||
      filterBy !== propertiesCtx.listing.filterBy)
      ? 0
      : propertiesCtx.listing.offset as number;
    await propertiesCtx.fetchListingProperties(searchTerms, filterBy, offset);
      setSearchTermsLabel(searchTerms);
      setFilterByLabel(filterBy);
  };

  useEffect(() => {
    search(localSearchTerms, localFilterBy);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prevPage = async () => {
    const offset = propertiesCtx.listing.offset as number;
    if (offset >= 0) {
      await search(
        localSearchTerms, localFilterBy, offset - paginationLimit
      );
    }
  }

  const nextPage = async () => {
    const offset = propertiesCtx.listing.offset as number;
    if (offset < count) {
      await search(
        localSearchTerms, localFilterBy, offset + paginationLimit
      );
    }
  }

  return (
    <PageWrapper>
      <div className="section">
        <H2 className="section-heading">Favorite properties</H2>
        {
          !propertiesCtx.favorites.loaded ? 
            <LoaderSpinner /> :
            <CardsWrapper>
              {
                favorites.map((property, i) => (                
                  <PropertiesCard  key={`PropertyCard-${i}`} property={property} />
                ))
              }
            </CardsWrapper>
        }
      </div>
      <div className="back-btn-wrapper">
        <Button onClick={() => history.goBack()}>&lt; Back</Button>
      </div>
      <div className="section">
        <H2 className="section-heading">Properties List</H2>
        <Text className="section-heading">by {filterByLabel}, with search terms: "{searchTermsLabel}"</Text>
      </div>
      <div className="section">
        <SearchWrapper>
          <H2>Search for neighborhood, city, or ZIP code</H2>
          <FilteredSearch
            filterByState={localFilterByState as StringState}
            searchTermsState={localSearchTermsState as StringState}
            filterDefault={localFilterBy}
            filterOptions={filterOptions}
            onClick={() => search(localSearchTerms, localFilterBy)}
          />
        </SearchWrapper>
      </div>
        {
          // eslint-disable-next-line no-mixed-operators
          rows && rows.length && (
            <div className="section">
              <Pagination
                offset={propertiesCtx.listing.offset as number}
                prevPage={prevPage}
                nextPage={nextPage}
                totalCount={count}
                paginationLimit={paginationLimit}
              />
            </div>
          // eslint-disable-next-line no-mixed-operators
          ) || null
        }
      <div>
        <CardsWrapper>
          {!propertiesCtx.listing.loaded ? (
            <LoaderSpinner />
          ) : (
            rows.map(
              (property, i) => {
                return (
                  <PropertiesListItem
                    property={property}
                    key={`PropertiesListItem-${i}`}
                  />
                );
              }
            )
          )}
        </CardsWrapper>
      </div>
        {
          // eslint-disable-next-line no-mixed-operators
          rows && rows.length && (
            <div className="section">
              <Pagination
                offset={propertiesCtx.listing.offset as number}
                prevPage={prevPage}
                nextPage={nextPage}
                totalCount={count}
                paginationLimit={paginationLimit}
              />
            </div>
          // eslint-disable-next-line no-mixed-operators
          ) || null
        }
      <div className="back-btn-wrapper">
        <Button onClick={() => history.goBack()}>&lt; Back</Button>
      </div>
    </PageWrapper>
  );
};

export default Listing;

const SearchWrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 50px;
  text-align: center;
  div {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
