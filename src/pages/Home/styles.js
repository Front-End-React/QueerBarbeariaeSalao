import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: green;
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
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const List = styled.li`
  font-family: "Poetsen One";
  font-weight: 400;
  font-size: 18px;
  color: white;
`;
