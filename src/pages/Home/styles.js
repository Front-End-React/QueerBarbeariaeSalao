import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: green;
`;

export const Logo = styled.div`
  max-width: 100px;
  max-height: 70px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Menu = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const List = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: white;
`;
