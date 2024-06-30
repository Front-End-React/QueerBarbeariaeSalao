import styled from "styled-components";
import BannerMobile from "../../assets/images/banner_mobile_come_meet_us.png";
import BannerDesktop from "../../assets/images/banner_come_meet_us.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BannerMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1200px) {
    background-image: url(${BannerDesktop});
  }
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 50px;
  gap: 4rem;
  background-color: #f7f1e3;
`;

/* export const AboutUsImage = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url(${AbstractFigure});
  background-repeat: no-repeat;
  background-position: center;
  align-content: center;

  img {
    width: 250px;
    height: 250px;
    transition: 0.5s all ease-in-out;
    display: block;
    margin: 0 auto;

    &:hover {
      transform: scale(1.5);
    }
  }
`; */

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AbstractFigure = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;
export const VectorOne = styled.div`
  /* max-width: 600px;
  width: 100%; */
  width: 600px;
  transform: translateY(50%);
`;
export const VectorTwo = styled.div`
  /* max-width: 400px;
  width: 100%; */
  width: 400px;
  transform: translateY(-65%) translateX(5%) rotate(-15deg);
  z-index: 1;
`;
export const Photo = styled.div`
  transform: translateY(-170%) translateX(-10%);
  z-index: 2;

  img {
    border-radius: 50%;
    overflow: hidden;
    width: 330px;
    height: 330px;
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
  color: black;
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  color: black;
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
