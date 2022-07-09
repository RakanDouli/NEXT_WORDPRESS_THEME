import React from "react";
import styled from "styled-components";
export default function ApplicationFilter({
  jobs,
  CheckboxHandler,
  SearchHandler,
  searchField,
}) {
  // Get input Dynamic field:
  const regiosField = jobs.map((job) => job.jobs.regio);
  // remove duplicat
  const regios = [...new Set(regiosField)];
  //get number of vacatures per input
  let regiosCount = [];
  regiosField.map(function (i) {
    regiosCount[i] = (regiosCount[i] || 0) + 1;
  });

  // Get input Dynamic field:
  const categoriesField = jobs.map((job) => job.jobs.category);
  // remove duplicat
  const categories = [...new Set(categoriesField)];
  //get number of vacatures per input
  let categoriesCount = [];
  categoriesField.map(function (i) {
    categoriesCount[i] = (categoriesCount[i] || 0) + 1;
  });

  return (
    <StyledFilter className="Filter">
      <StyledInputField className="InputField">
        <input
          type="search"
          value={searchField}
          onChange={SearchHandler}
          placeholder="Search"
        />
      </StyledInputField>
      <StyledCheckbox>
        <h3>Regio</h3>
        {regios.map((regio) => {
          return (
            <div>
              <input
                id={regio}
                type="checkbox"
                onClick={CheckboxHandler}
                value={regio}
              />
              <label htmlFor={regio}>
                <span>{regio} </span>
                <span> {regiosCount[regio]} </span>
              </label>
            </div>
          );
        })}
      </StyledCheckbox>
      <StyledCheckbox>
        <h3>Categories</h3>
        {categories.map((category) => {
          return (
            <div>
              <input
                id={category}
                type="checkbox"
                onClick={CheckboxHandler}
                value={category}
              />
              <label htmlFor={category}>
                <span>{category} </span>
                <span> {categoriesCount[category]} </span>
              </label>
            </div>
          );
        })}
      </StyledCheckbox>
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
const StyledCheckbox = styled.div`
  margin: 20px 0;
  h3 {
    display: block;
    margin: 20px 0;
    font-weight: 700;
    color: ${(props) => props.theme.colors.color3};
  }
  div {
    position: relative;
    label {
      /* border: 1px solid red; */
      cursor: pointer;
      width: 95%;
      position: absolute;
      display: inline-flex;
      justify-content: space-between;
      flex-grow: 1;
      padding: 3px 10px 3px 10px;
      margin-top: -3px;
    }
    input {
      display: inline;
      margin: 0px 0px 16px 0;
    }
  }
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

// //       <div></div>
// <StyledOptionField>
// <label>Regios</label>

// <select defaultValue={"default"}>
//   <option value={"default"} disabled>
//     Select Regio
//   </option>
//   {/* {Regios.map((regio) => {
//     return <option value={regio}>{regio}</option>;
//   })} */}
// </select>
// </StyledOptionField>
// <StyledOptionField>
// <label>Sectors</label>
// <select defaultValue={"default"}>
//   <option value={"default"} disabled>
//     Select Sector
//   </option>
//   {/* {Sectors.map((sector, index) => {
//     return (
//       <option key={index} value={sector}>
//         {sector}
//       </option>
//     );
//   })} */}
// </select>
// </StyledOptionField>
