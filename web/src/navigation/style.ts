import styled, { keyframes } from 'styled-components';
import { colors } from '../style';

const hideMenu = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const showMenu = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const SideMenuStyle = styled.div`
  position: relative;
  z-index: 1;

  .left-side-menu {
    position: absolute;
    left: 0;
    top: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.primary};
    background-image: linear-gradient(to top right, ${colors.primary}, ${colors.lightPrimary});
    height: calc(100vh - 70px);
    width: 200px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    
    div {
      padding: 5px;
      
      a {
        font-size: 16px;
        text-decoration: none;
        font-size: 1.5rem;
      }

      a:link {
        color: ${colors.secondary};
      }
      
      a:visited {
        color: ${colors.secondary};
      }
      
      a:hover {
        color: darkgray;
      }
      
      a:active {
        color: ${colors.secondary};
      }
    }
  }

  .animation-hide {
    animation-name: ${hideMenu};
    animation-duration: 1s;
    transform: translateX(-100%);
  }

  .animation-show {
    animation-name: ${showMenu};
    animation-duration: 1s;
    transform: translateX(0%);
  }
`;

export const NavBarStyle = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;

  .menu-btn {
    align-self: flex-start;
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 33.3%;

    > img {
      width: 50px;    
      height: 52px;
      cursor: pointer;
    }
  }

  .app-name {
    color: ${colors.primary};
    align-self: flex-start;
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 33.3%;
    font-weight: bold;
    text-align: center;

    span {
      margin-top: 9px;
    }
  }

  .logout-btn {
    color: ${colors.primary};
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;

    > div {
      align-self: flex-end;
      margin-right: 20px;
      margin-top: 15px;
      cursor: pointer;
    }
  }

  @media (min-width: 800px) {
    .app-name {
      font-size: 26px;
    }
  }

  @media (min-width: 600px) {
    .app-name {
      margin-top: 4px;
      font-size: 18px;
    }
  }
`;
