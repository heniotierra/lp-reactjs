import React from "react";
import styled from 'styled-components';
import { Property } from '../../types';
import { shadows } from '../../style';
import { H4, Text } from "../typography";
import LocalImage from "../image";
import { useHistory } from "react-router";
import AvailabilityIndicator from "../fields/AvailabilityIndicator";

export const PropertiesListItem = ({
  property: {
    id,
    image,
    price,
    beds,
    address,
    city,
    zipcode,
    images,
    available,
  },
}: {
  property: Property;
}) => {
  const firstImages = images.slice(0, 4);
  const history = useHistory();
  return (
    <ListItemStyle 
      onClick={
        () =>
          history.push(`/property/${id}`)
      }
    >
      <div className="left-side">
        <LocalImage src={image} alt="property image" />
        <Text><b>Price:</b> {price}</Text>
      </div>
      <div className="mid">
        <H4>Overview:</H4>
        <Text><b>Neightborhood:</b> {price}</Text>
        <Text><b>Beds:</b> {beds}</Text>
        <Text><b>Address:</b> {address}</Text>
        <Text><b>Price:</b> {price}</Text>
        <Text><b>City:</b> {city}</Text>
        <Text><b>ZIP Code:</b> {zipcode}</Text>
        <Text>
          <b>Available:</b>{" "}
          <AvailabilityIndicator available={available === "true"} />
        </Text>
      </div>
      <div className="right-side">
        {firstImages.map((imageItem) => (
          <LocalImage src={imageItem} alt="properity image" />
        ))}
      </div>
    </ListItemStyle>
  );
};

const ListItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 10px;
  width: 100%;
  min-width: 200px;
  height: auto;
  border-radius: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  align-items: center;
  cursor: pointer;
  padding: 7px;
  box-shadow: ${shadows.mid};
  .left-side {
    align-self: flex-start;
    grid-column: 1/4;
    img {
      width: 100%;
    }
    float: left;
    margin: 7px;
    margin-top: 10px;
  }
  .mid {
    align-self: flex-start;
    grid-column: 4/8;
    float: left;
    margin: 7px;
    h4 {
      margin-top: 2px;
    }
  }
  .right-side {
    align-self: flex-start;
    grid-column: 8/13;
    img {
      float: left;
      width: 40%;
      margin: 2.5%;
    }
  }
`;
