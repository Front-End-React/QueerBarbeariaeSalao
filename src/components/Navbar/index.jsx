import React from "react";

import LogoWhiteLetter from "../../assets/images/logo_white.png";
import Hamburger from "../../assets/vectors/hamburger.svg";

import {
  Container,
  NavigationDesktop,
  Logo,
  Menu,
  List,
  MenuState,
  NavigationMobile,
} from "./styles";

export default function Navbar() {
  return (
    <Container>
      <NavigationDesktop>
        <Logo>
          <img src={LogoWhiteLetter} alt="Logo Queer" />
        </Logo>
        <Menu>
          <List>Quem somos</List>
          <List>Equipe</List>
          <List>Serviços</List>
          <List>Planos</List>
          <List>Contato</List>
        </Menu>
        <MenuState>
          <img src={Hamburger} alt="Open" />
        </MenuState>
      </NavigationDesktop>
      <NavigationMobile>
        <Menu>
          <List>Quem somos</List>
          <List>Equipe</List>
          <List>Serviços</List>
          <List>Planos</List>
          <List>Contato</List>
        </Menu>
      </NavigationMobile>
    </Container>
  );
}
