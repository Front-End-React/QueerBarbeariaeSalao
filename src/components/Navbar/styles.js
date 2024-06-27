import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.open ? "100vh" : "60px")};
  padding: 0 2rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 1s;

  @media screen and (min-width: 1200px) {
    height: 80px;
    flex-direction: row;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1200px) {
    height: 100%;
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    width: 120px;
  }
`;

export const MenuDesktop = styled.ul`
  height: 100%;
  gap: 1rem;
  display: none;
  flex-direction: row;
  align-items: center;
  list-style-type: none;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const ListDesktop = styled.li`
  font-family: "Poetsen One";
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
`;

export const MenuBurger = styled.button`
  max-width: 30px;
  max-height: 30px;
  display: block;
  border: none;
  background: transparent;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const MenuMobile = styled.ul`
  height: 100%;
  margin-top: 6rem;
  gap: 3rem;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

export const ListMobile = styled.li`
  font-family: "Poetsen One";
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
`;
