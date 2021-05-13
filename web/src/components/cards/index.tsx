import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { shadows, colors } from '../../style';
import { Property } from '../../types';
import LocalImage from '../image';
import { Text } from "../typography";

export const Card = styled.div`
  float: left;
  margin: 5px;
  width: 11%;
  min-width: 60px;
  height: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary};
  background-color: ${colors.midPrimary};
  cursor: pointer;
  padding: 7px;
  box-shadow: ${shadows.mid};
  :hover {
    background-color: ${colors.primary};
  }
  div {
    margin: 7px;
    img {
      object-fit: cover;
      width: 60px;
    }
  }
  @media (min-width: 600px) {
    div {
      img {
        width: 5vw;
      }
    }
  }
`;

export const PropertiesCard = ({
  property: {
    id,
    price,
    image,
    totalVisits
  },
  showVisits,
}: {
  property: Property;
  showVisits?: boolean;
}) => {
  const history = useHistory();
  return (
    <Card
      onClick={
        () =>
          history.push(`/property/${id}`)
      }
    >
      <div><LocalImage src={image} alt={`favorite property`} /></div>  
      <div><Text>Price: ${price}</Text></div>
      {showVisits? <div><Text>Last visited: {totalVisits}</Text></div> : null}
    </Card>
  );
}