import React from "react";
import styled from "styled-components";
import { StringState } from "../../types";

import lookingGlass from "../../assets/images/looking-glass.png";

const FilteredSearch = ({
  filterByState,
  searchTermsState,
  filterDefault,
  filterOptions,
  onClick,
}: {
  filterByState: StringState;
  searchTermsState: StringState;
  filterDefault: string; 
  filterOptions: {
    label: string;
    value: string;
  }[],
  onClick: () => void
}) => {
  const [filterBy, setFilterBy] = filterByState;
  const [searchTerms, setSearchTerms] = searchTermsState;
  return (
    <FilteresSearchStyle>
      <select
        onChange={(e) => setFilterBy(e.target.value)}
        value={filterBy}
        defaultValue={filterDefault}
      >
        {
          filterOptions.map(({
            label,
            value,
          }) => (
            <option value={value}>
              {label}
            </option> 
          ))
        }
      </select>
      <input
        value={searchTerms}
        placeholder={filterOptions.map(({ label }) => label).join(", ")}
        onChange={(e) => setSearchTerms(e.target.value)}
      />
      <button
        onClick={
          () => {
            searchTerms && filterBy && onClick();
          }
        }
      >
        <img src={lookingGlass} alt={`search`} />
      </button>
    </FilteresSearchStyle>
  );
}

export default FilteredSearch;

const FilteresSearchStyle = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: black;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  select {
    max-width: 100px;
    width: 25%;
    float: left;
    height: 40px;
    border: none;
    background-color: white;
    :focus {
      outline: none;  
    }
    border-radius: 10px;
  }
  input {
    width: 55%;
    float: left;
    height: 35px;
    border: none;
    background-color: white;
    :focus {
      outline: none;  
    }
  }
  button {
    min-width: 40px;
    max-width: 40px;
    float: right;
    height: 40px;
    margin-top: 0px;
    border: none;
    background-color: white;
    img {
      width: 25px;
    }
    border-radius: 10px;
  }
`;
