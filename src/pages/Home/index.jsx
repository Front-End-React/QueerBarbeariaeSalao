import React from "react";

import Navbar from "../../components/Navbar";

import BannerImage from "../../assets/images/cutting_hair.jpg";
import BarberShopFacadeGreen from "../../assets/images/barber_shop_facade_green.jpeg";
import TeamProfessionalPhoto from "../../assets/images/perfil_3.png";
import ServiceBeardShave from "../../assets/images/perfil_5.png";
import ServiceHairCut from "../../assets/images/seated_on_chair.png";
import ServiceHairColored from "../../assets/images/colored_face.png";

import {
  Container,
  Banner,
  AboutUs,
  BarberShopImages,
  Article,
  Title,
  Description,
  Team,
  Slide,
  Professional,
  ProfessionalPhoto,
  ProfessionalDescription,
  Services,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
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
        <Slide>
          <Professional>
            <ProfessionalPhoto>
              <img src={TeamProfessionalPhoto} alt="Foto do profissional" />
            </ProfessionalPhoto>
            <ProfessionalDescription>
              Matheus Vince <br /> barbeiro, visagista e colorista
            </ProfessionalDescription>
          </Professional>
        </Slide>
      </Team>
      <Services>
        <Title>Serviços e valores</Title>
        <Slide>
          <Card>
            <CardImage>
              <img src={ServiceBeardShave} alt="Imagem exemplo do serviço" />
            </CardImage>
            <CardTitle>Corte de barba</CardTitle>
            <CardDescription>
              Preço: R$ 70,00 <br /> Duração: 40 minutos
            </CardDescription>
          </Card>
          <Card>
            <CardImage>
              <img src={ServiceHairCut} alt="Imagem exemplo do serviço" />
            </CardImage>
            <CardTitle>Corte de cabelo</CardTitle>
            <CardDescription>
              Preço: R$ 100,00 <br /> Duração: 40 minutos
            </CardDescription>
          </Card>
          <Card>
            <CardImage>
              <img src={ServiceHairColored} alt="Imagem exemplo do serviço" />
            </CardImage>
            <CardTitle>Coloração de cabelo</CardTitle>
            <CardDescription>
              Preço: R$ 500,00 <br /> Duração: 90 minutos
            </CardDescription>
          </Card>
        </Slide>
      </Services>
    </Container>
  );
}
