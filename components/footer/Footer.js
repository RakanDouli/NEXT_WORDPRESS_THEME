import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h4>The website is delivered to you by Rakan Douli</h4>
      <a
        href="https://developers.wpengine.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Part of the WP Engine Headless Developers Road Map 🗺️
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.color2};
  padding: 15px 30px;
  margin: 40px 30px 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.colors.white};
    margin: 20px;
  }
`;
