import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  position: relative;
  background: none;

  @media screen and (min-width: 1200px) {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const NavigationDesktop = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Logo = styled.div`
  width: auto;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Menu = styled.ul`
  display: none;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const List = styled.li`
  font-family: "Poetsen One";
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const MenuState = styled.div`
  display: block;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const NavigationMobile = styled.div`
  position: absolute;
  right: 2rem;
  top: 60px;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  overflow: hidden;

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%.7rem;
  }
`;
