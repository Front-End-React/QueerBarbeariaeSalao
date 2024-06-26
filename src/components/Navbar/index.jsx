import React, { useState } from "react";

import LogoWhiteLetter from "../../assets/images/logo_white.png";
import Hamburger from "../../assets/svg/hamburger.svg";
import Close from "../../assets/svg/close.svg";

import {
  Container,
  Logo,
  Navigation,
  MenuDesktop,
  ListDesktop,
  MenuBurger,
  MenuMobile,
  ListMobile,
} from "./styles";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <Container open={active}>
      <Navigation>
        <Logo>
          <img src={LogoWhiteLetter} alt="Logo Queer" />
        </Logo>
        <MenuDesktop>
          <ListDesktop>Quem somos</ListDesktop>
          <ListDesktop>Equipe</ListDesktop>
          <ListDesktop>Serviços</ListDesktop>
          <ListDesktop>Planos</ListDesktop>
          <ListDesktop>Contato</ListDesktop>
        </MenuDesktop>
        <MenuBurger onClick={() => setActive(!active)}>
          <img src={active ? Close : Hamburger} alt="Open/Close" />
        </MenuBurger>
      </Navigation>
      <MenuMobile open={active}>
        <ListMobile>Quem somos</ListMobile>
        <ListMobile>Equipe</ListMobile>
        <ListMobile>Serviços</ListMobile>
        <ListMobile>Planos</ListMobile>
        <ListMobile>Contato</ListMobile>
      </MenuMobile>
    </Container>
  );
}
