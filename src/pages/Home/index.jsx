import React from "react";

import Navbar from "../../components/Navbar";

import BarberShopFacadeGreen from "../../assets/images/barber_shop_facade_green.jpeg";
import TeamProfessionalPhoto from "../../assets/images/perfil_3.png";
import ServiceBeardShave from "../../assets/images/perfil_5.png";

import {
  Container,
  Banner,
  AboutUs,
  AbstractFigure,
  VectorOne,
  VectorTwo,
  Photo,
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
  Gallery,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <AboutUs>
        <Gallery>
          <AbstractFigure>
            <VectorOne>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#8A3FFC"
                  d="M36.3,-58.1C47.7,-56.3,58,-47.9,59.2,-37.1C60.5,-26.3,52.7,-13.1,50.6,-1.2C48.6,10.8,52.2,21.5,52.7,35.3C53.2,49.2,50.6,66.1,41.3,72.9C32,79.7,16,76.4,2.7,71.8C-10.7,67.2,-21.3,61.3,-35.7,57.4C-50,53.5,-68.1,51.6,-77.5,42.4C-87,33.1,-87.9,16.6,-82.6,3C-77.3,-10.5,-65.9,-20.9,-56.7,-30.7C-47.6,-40.6,-40.8,-49.7,-31.7,-52.8C-22.6,-55.9,-11.3,-53,0.6,-54C12.5,-55,24.9,-59.9,36.3,-58.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </VectorOne>
            <VectorTwo>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#F1C21B"
                  d="M33.5,-56.4C46.2,-50.6,61.5,-47.4,70.6,-38.5C79.6,-29.5,82.6,-14.8,79.5,-1.8C76.5,11.2,67.5,22.5,61.4,36.8C55.4,51,52.4,68.3,42.7,73.7C33,79.2,16.5,72.7,1.7,69.7C-13.1,66.8,-26.1,67.3,-40.3,64.5C-54.4,61.6,-69.6,55.3,-78.9,44C-88.1,32.6,-91.5,16.3,-85.1,3.6C-78.8,-9,-62.8,-18,-53.7,-29.5C-44.5,-41,-42.1,-54.9,-34.3,-63.6C-26.5,-72.3,-13.2,-75.8,-1.5,-73.3C10.3,-70.8,20.7,-62.2,33.5,-56.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </VectorTwo>
          </AbstractFigure>
          <Photo>
            <img
              src={BarberShopFacadeGreen}
              alt="Barbearia vista pelo lado de fora"
            />
          </Photo>
        </Gallery>

        {/* <Article>
          <Title>Quem somos</Title>
          <Description>
            Inaugurada em 2023 com a proposta de acolher todas as diversidades,
            trazer conforto e lazer no momento mais importante que é decidir
            qual visual faz os olhos brilharem mais ao olhar no espelho, seja
            criar um novo estilo ou manter...
          </Description>
        </Article> */}
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
          {/* <Card>
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
          </Card> */}
        </Slide>
      </Services>
    </Container>
  );
}
