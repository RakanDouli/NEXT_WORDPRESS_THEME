import styled from "styled-components";

export const StyledOptionField = styled.div`
  margin: 20px 0;
  Label {
    display: block;
    margin: 20px 0;
    font-weight: 700;
    color: ${(props) => props.theme.colors.color3};
  }
  select {
    width: 100%;
    padding: 10px;
    border: none;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.color1};
  }
`;
