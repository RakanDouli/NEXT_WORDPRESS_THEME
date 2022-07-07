import React from "react";
import styled from "styled-components";

export default function ApplicationContainer({
  handleChange,
  VacaturesFound,
  children,
}) {
  return (
    <StyledApplicationContainer className="ApplicationContainer">
      <StyledFilter className="Filter">
        <StyledInputField className="InputField">
          <input type="search" onChange={handleChange} placeholder="Search" />
        </StyledInputField>
      </StyledFilter>
      <StyledApplicationContainerlist className="ApplicationContainerlist">
        <StyledVacatures>{VacaturesFound} vacaure(s) gevonden</StyledVacatures>
        {children}
      </StyledApplicationContainerlist>
    </StyledApplicationContainer>
  );
}
const StyledApplicationContainer = styled.section`
  height: 80vh;
  padding: 30px;
  display: flex;
  width: 100%;
`;
const StyledInputField = styled.div`
  /* width: 100%; */
  input {
    width: 100%;
    padding: 10px;
    border: none;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.color1};
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme.colors.white};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${(props) => props.theme.colors.white};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${(props) => props.theme.colors.white};
    }
    /* ::-webkit-search-cancel-button{
    
    } */
  }
`;
const StyledFilter = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.colors.color2};
  height: 100%;
  padding: 30px 20px;
`;
const StyledApplicationContainerlist = styled.div`
  width: 100%;
  padding: 0 0 20px 20px;
`;
const StyledVacatures = styled.div`
  padding: 20px 0;
`;
