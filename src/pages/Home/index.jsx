import React from "react";

import LogoLetter from "../../assets/images/logo_white.png";
import BannerImage from "../../assets/images/cutting_hair.jpg";
import BarberShopFacadeGreen from "../../assets/images/barber_shop_facade_green.jpeg";
import TeamProfessionalPhoto from "../../assets/images/perfil_3.png";

import {
  Container,
  Navbar,
  Logo,
  Menu,
  List,
  Banner,
  AboutUs,
  BarberShopImages,
  Article,
  Title,
  Description,
  Team,
  TeamProfessionals,
  Professional,
  ProfessionalPhoto,
  ProfessionalDescription,
} from "./styles";

export default function Home() {
  return (
    <Container>
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
      <Banner>
        <img src={BannerImage} alt="Imagem/Banner" />
      </Banner>
      <AboutUs>
        <BarberShopImages>
          <img
            src={BarberShopFacadeGreen}
            alt="Barbearia vista pelo lado de fora"
          />
        </BarberShopImages>
        <Article>
          <Title>Quem somos</Title>
          <Description>
            Inaugurada em 2023 com a proposta de acolher todas as diversidades,
            trazer conforto e lazer no momento mais importante que é decidir
            qual visual faz os olhos brilharem mais ao olhar no espelho, seja
            criar um novo estilo ou manter...
          </Description>
        </Article>
      </AboutUs>
      <Team>
        <Title>Nossos profissionais</Title>
        <TeamProfessionals>
          <Professional>
            <ProfessionalPhoto>
              <img src={TeamProfessionalPhoto} alt="Foto do profissional" />
            </ProfessionalPhoto>
            <ProfessionalDescription>
              Matheus Vince <br /> barbeiro, visagista e colorista
            </ProfessionalDescription>
          </Professional>
        </TeamProfessionals>
      </Team>
    </Container>
  );
}
