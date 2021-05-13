import React from "react";
import styled from "styled-components";
import loader from "../../assets/images/loader.svg";

/**
 * Component to be shown while loading data or doing time costly operations
 */
const LoaderSpinner = () => (
  <LoaderSpinnerStyle>
    <img src={loader} alt="loader" />
  </LoaderSpinnerStyle>
);

export default LoaderSpinner;

const LoaderSpinnerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 9999;
  img {
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    height: 100px;
  }
`;
