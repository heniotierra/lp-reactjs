import styled from 'styled-components';
import { colors } from '../../style';

export const PropertyDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  b {
    color: ${colors.primary};
  }
  .images {
    height: calc(100vh - 70px);
    grid-column: 1/8;
    overflow-y: scroll;
    .main-image {
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .more-images {
      width: 100%;
      .image {
        float: left;
        width: 45%;
        margin: 2.5%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .info {
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
    align-self: flex-start;
    grid-column: 8/13;
    p {
      margin-left: 10px;  
    }
    button {
      margin: auto;
    }
    .see-more {
      display: block;
    }
    .see-less {
      display: none;
    }
    .see-more-btn-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        margin: 10px;
      }
    }
  }
`;
