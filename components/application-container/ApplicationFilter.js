import React from "react";
import styled from "styled-components";
export default function ApplicationFilter({
  Regios,
  changeRegio,
  Sectors,
  changeSector,
  handleChange,
}) {
  return (
    <StyledFilter className="Filter">
      <StyledInputField className="InputField">
        <input type="search" onChange={handleChange} placeholder="Search" />
      </StyledInputField>
      <div></div>
      <StyledOptionField>
        <label>Regios</label>

        <select defaultValue={"default"} onChange={changeRegio}>
          <option value={"default"} disabled>
            Select Regio
          </option>
          {Regios.map((regio) => {
            return <option value={regio}>{regio}</option>;
          })}
        </select>
      </StyledOptionField>
      <StyledOptionField>
        <label>Sectors</label>
        <select defaultValue={"default"} onChange={changeSector}>
          <option value={"default"} disabled>
            Select Sector
          </option>
          {Sectors.map((sector, index) => {
            return (
              <option key={index} value={sector}>
                {sector}
              </option>
            );
          })}
        </select>
      </StyledOptionField>
    </StyledFilter>
  );
}
const StyledInputField = styled.div`
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
  min-height: 70vh;
`;

const StyledOptionField = styled.div`
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
