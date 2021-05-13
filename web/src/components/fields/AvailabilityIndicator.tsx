import React from "react";
import styled from "styled-components";

const AvailabilityIndicator = ({
  available,
}: {
  available: boolean;
}) => <AvailabilityIndicatorStyled available={available}>
    &nbsp;&nbsp;&nbsp;&nbsp;
  </AvailabilityIndicatorStyled>;

const AvailabilityIndicatorStyled = styled.span<{ available: boolean }>`
  background-color: ${(props) => props.available ? "green" : "red"};
`;

export default AvailabilityIndicator;
