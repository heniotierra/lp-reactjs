import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { CardsWrapper, PageWrapper } from '../../components/wrappers';
import { PropertiesCard } from '../../components/cards';
import LoaderSpinner from '../../components/loader';
import { Property, StringState } from '../../types';
import { usePropertiesContext } from '../../contexts/properties';
import { H2 } from '../../components/typography';
import FilteredSearch from '../../components/inputs/FilteredSearch';

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

const filterDefault = "city";

const Home = () => {
  const localFilterByState = useState<string>(filterDefault);
  const localSearchTermsState = useState<string>("");
  const [localFilterBy] = localFilterByState;
  const [localSearchTerms] = localSearchTermsState;

  const propertiesCtx = usePropertiesContext();

  const favorites = propertiesCtx.favorites.data as Property[];
  const lastVisited = propertiesCtx.lastVisited.data as Property[];

  const history = useHistory();

  useEffect(() => {
    (async () => {
      await propertiesCtx.fetchHomeProperties();
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PageWrapper>
    <div className="section">
      <SearchWrapper>
        <H2>Search for neighborhood, city, or ZIP code</H2>
        <FilteredSearch
          filterByState={localFilterByState as StringState}
          searchTermsState={localSearchTermsState as StringState}
          filterDefault={filterDefault}
          filterOptions={filterOptions}
          onClick={() =>
            history.push(`/properties/?searchTerms=${localSearchTerms}&filterBy=${localFilterBy}`)
          }
        />
      </SearchWrapper>
    </div>
    <div className="section">
      <H2 className="section-heading">Favorite properties</H2>
      {
        !propertiesCtx.favorites.loaded ? 
          <LoaderSpinner /> :
          <CardsWrapper>
            {
              favorites.map((property, i) => (
                <PropertiesCard key={`PropertyCard-${i}`} property={property} />
              ))
            }
          </CardsWrapper>
      }
    </div>
    <div className="section">
      <H2 className="section-heading">Last visited properties</H2>
      {
        !propertiesCtx.lastVisited.loaded ? 
          <LoaderSpinner/> :
          <CardsWrapper>
            {
              lastVisited.map((property, i) => (
                <PropertiesCard key={`PropertyCard-${i}`} property={property} />
              ))
            }
        </CardsWrapper>
      }
    </div>
  </PageWrapper>
};

export default Home;

const SearchWrapper = styled.div`
  width: 100%;
  background-color: lightgray;
  padding-bottom: 50px;
  padding-top: 50px;
  text-align: center;
  div {
    margin: 50px 50px 50px 50px;
  }
  @media (min-width: 800px) {
    div {
      margin:  50px 100px 50px 100px;
    }
  }
`;
