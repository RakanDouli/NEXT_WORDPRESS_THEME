import Link from "next/link";
import styled from "styled-components";
import { Location, Calendar } from "react-icons/im";
import { Building, ExclamationCircle } from "react-icons/fa";

export default function ApplictationCard({ job }) {
  return (
    <StyledApplicationCard>
      <Link href={"/jobs" + job.uri} className={"card"}>
        <di className="card">
          <StyledCardFeatures>
            <li>
              <Location />
              {job.jobs.regio}
            </li>
            <li>
              <Calendar />
              {job.jobs.hoursPerWeek}
            </li>
            <li>
              <Building />
              {job.jobs.education}
            </li>
            <li>
              <ExclamationCircle />
              {job.jobId}
            </li>
          </StyledCardFeatures>
          <StyledCardTitle>{job.title} &rarr;</StyledCardTitle>
          <StyledCardDescription>
            <p>{job.jobs.jobDescription}</p>
          </StyledCardDescription>
        </di>
      </Link>
    </StyledApplicationCard>
  );
}
const StyledApplicationCard = styled.div`
  margin: 0 0 20px 0;
  cursor: pointer;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  .card {
    color: ${(props) => props.theme.colors.color1};
  }
`;
const StyledCardFeatures = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 8px 0;
  list-style: none;
  li {
    margin-right: 20px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    svg {
      margin-right: 6px;
      fill: ${(props) => props.theme.colors.color3};
    }
  }
`;
const StyledCardTitle = styled.h2`
  line-height: 30px;
`;
const StyledCardDescription = styled.p`
  margin: 15px 0;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px; /* fallback */
  max-height: 60px; /* fallback */
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
