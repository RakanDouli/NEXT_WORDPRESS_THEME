import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Link from "next/link";

export default function home() {
  return (
    <div>
      <Header></Header>
      <BodySection className="body-section">
        <img
          src="https://www.techsharks.nl/Thumbs/767/384/75/Crop/CmsData/Video/shark-left.jpg"
          alt=""
        />
        <CTACard>
          <div>
            <h3 className="subtitle">
              VACATURES IN DE PROCES- EN MAAKINDUSTRIE
            </h3>
            <h1 className="subtitle">
              WHY STAY A FISH, IF YOU CAN BE A SHARK?
            </h1>
            <Link href={"/jobs"}>GRIJP JOUW TECHNISCHE VACATURE</Link>
          </div>
        </CTACard>
      </BodySection>

      <Footer></Footer>
    </div>
  );
}
export const BodySection = styled.section`
  min-height: 80vh;
  height: 100%;
  padding: 30px;
  img {
    position: absolute;
    z-index: -1;
    /* height: 60vh; */
    width: 80vw;
    @media screen and (max-width: 900px) {
      width: 100vw;
    }
  }
  @media screen and (max-width: 900px) {
    min-height: unset;
    img {
      width: 100vw;
    }
  }
`;
export const CTACard = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;
  height: 60vh;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }

  div {
    padding: 20px;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 900px) {
      width: 80%;
      padding: 0;
    }
  }
  h3 {
    color: ${(props) => props.theme.colors.color3};
  }
  a {
    background-color: ${(props) => props.theme.colors.color5};
    width: fit-content;
    line-height: 1.2rem;
    padding: 10px 20px;
    font-weight: 700;
  }
`;
