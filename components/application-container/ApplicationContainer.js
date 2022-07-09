import styled from "styled-components";
import ApplicationFilter from "./ApplicationFilter";
// import { FaRegWindowClose } from "react-icons/Fa";
import { useState } from "react";
import ApplictationCard from "./ApplicationCard";

export default function ApplicationContainer({ jobs }) {
  const [searchField, setSearchField] = useState("");
  const [checkbox, setCheckbox] = useState([]);
  console.log(checkbox.length);
  let filteredSearch = [];
  // .replace(/\s+/g, " ").trim()
  if (searchField.length > 0) {
    filteredSearch = jobs.filter((job) => {
      return job.title.toLowerCase().includes(searchField.toLowerCase());
    });
  } else if (checkbox.length > 0) {
    filteredSearch = jobs.filter((job) => {
      return (
        checkbox.some(
          (box) => box.toLowerCase() === job.jobs.regio.toLowerCase()
        ) ||
        checkbox.some(
          (box) => box.toLowerCase() === job.jobs.category.toLowerCase()
        )
      );
    });
  } else {
    filteredSearch = jobs;
  }

  console.log(
    "%cApplicationContainer.js line:17 filteredSearch",
    "color: #007acc;",
    filteredSearch
  );

  console.log("checkbox", checkbox);

  const SearchHandler = (e) => {
    setSearchField(e.target.value);
  };
  const CheckboxHandler = (e) => {
    var updatedList = [...checkbox];
    if (e.target.checked) {
      updatedList = [...checkbox, e.target.value];
    } else {
      updatedList.splice(checkbox.indexOf(e.target.value), 1);
    }
    setCheckbox(updatedList);
  };
  const ResetHandler = () => {
    setSearchField("");
    setCheckbox("");
  };

  return (
    <StyledApplicationContainer className="ApplicationContainer">
      <ApplicationFilter
        jobs={jobs}
        searchField={searchField}
        CheckboxHandler={CheckboxHandler}
        SearchHandler={SearchHandler}
      />
      <StyledApplicationContainerlist className="ApplicationContainerlist">
        <StyledApplicationListHeader>
          <div>
            <div>{filteredSearch.length} vacaure(s) gevonden</div>
            <div className="reset-filter" onClick={ResetHandler}>
              {/* <FaRegWindowClose /> */}
              <p> Reset filter</p>
            </div>
          </div>
        </StyledApplicationListHeader>
        {filteredSearch.map((job) => {
          return <ApplictationCard key={job.uri} job={job}></ApplictationCard>;
        })}
      </StyledApplicationContainerlist>
    </StyledApplicationContainer>
  );
}
const StyledApplicationContainer = styled.section`
  min-height: 80vh;
  padding: 30px;
  display: flex;
  width: 100%;
  position: relative;
`;

const StyledApplicationContainerlist = styled.div`
  width: 100%;
  padding: 0 0 20px 20px;
`;
const StyledApplicationListHeader = styled.div`
  padding: 20px 0;
  > div {
    display: flex;
    justify-content: space-between;
  }
  .reset-filter {
    cursor: pointer;
    display: flex;
    justify-content: center;
    svg {
      margin-right: 5px;
    }
  }
`;
