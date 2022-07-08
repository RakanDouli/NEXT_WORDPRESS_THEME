import styled from "styled-components";
import ApplicationFilter from "./ApplicationFilter";
import { FaRegWindowClose } from "react-icons/Fa";
import { useState } from "react";
import ApplictationCard from "./ApplicationCard";

export default function ApplicationContainer({ jobs }) {
  const [searchField, setSearchField] = useState("");
  const [searchRegio, setSearchRegio] = useState("");
  const [searchSector, setSearchSector] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  // let uniqueItems = [...new Set(items)]
  const filteredSearch = jobs.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchField.toLowerCase()) &&
      post.jobs.categoryCopy
        .toLowerCase()
        .includes(searchRegio.toLowerCase()) &&
      post.jobs.category.toLowerCase().includes(searchSector.toLowerCase())
    );
  });

  // remove duplicate
  const Regiofields = jobs.map((job) => job.jobs.categoryCopy);
  const Regios = [...new Set(Regiofields)];

  //
  const changeRegio = (e) => {
    setSearchRegio(e.target.value);
  };
  // remove duplicate
  const Sectorfields = jobs.map((job) => job.jobs.category);
  const Sectors = [...new Set(Sectorfields)];
  //
  const changeSector = (e) => {
    setSearchSector(e.target.value);
  };
  const ResetHandler = () => {
    setSearchField("");
    setSearchRegio("");
    setSearchSector("");
  };
  return (
    <StyledApplicationContainer className="ApplicationContainer">
      <ApplicationFilter
        Regios={Regios}
        changeRegio={changeRegio}
        Sectors={Sectors}
        changeSector={changeSector}
        handleChange={handleChange}
      />
      <StyledApplicationContainerlist className="ApplicationContainerlist">
        <StyledApplicationListHeader>
          <div>
            <div>{filteredSearch.length} vacaure(s) gevonden</div>
            <div className="reset-filter" onClick={ResetHandler}>
              <FaRegWindowClose />
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
