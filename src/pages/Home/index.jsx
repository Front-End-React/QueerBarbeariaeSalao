import React from "react";

import LogoLetter from "../../assets/images/logo_white.png";

import { Navbar, Logo, Menu, List } from "./styles";

export default function Home() {
  return (
    <Navbar>
      <Logo>
        <img src={LogoLetter} alt="Logo Queer" />
      </Logo>
      <Menu>
        <List>Quem somos</List>
        <List>Equipe</List>
        <List>Cortes</List>
        <List>Planos</List>
        <List>Contato</List>
        <List>Login</List>
      </Menu>
    </Navbar>
  );
}
