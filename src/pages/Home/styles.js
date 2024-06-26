import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 50px;
  gap: 4rem;
  background-color: purple;
`;

export const BarberShopImages = styled.div`
  width: 400px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: "Poetsen One";
  font-weight: 400;
  font-size: 24px;
  color: white;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: white;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  gap: 2rem;
  background-color: black;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 8rem;
`;

export const Professional = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 1rem;
`;

export const ProfessionalPhoto = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProfessionalDescription = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: white;
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px;
  gap: 2rem;
  background-color: grey;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 1rem;
`;

export const CardImage = styled.div`
  width: 300px;
  height: 300px;
  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 20px;
  color: white;
`;

export const CardDescription = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: white;
`;
