import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import Header from "../../components/header/Header";
import styled from "styled-components";
import { ImLocation, ImCalendar } from "react-icons/im";
import { FaBuilding, FaExclamationCircle } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/Gi";

export default function SlugPage({ job }) {
  return (
    <div>
      <Head>
        <title>Job Application Page</title>
      </Head>
      <Header></Header>
      <StyledSlugBanner>
        <StyledBannerImage>
          <img src={job.featuredImage.node.sourceUrl} alt="" />
        </StyledBannerImage>
        <StyledBannerIntro>
          <h1 className="title">{job?.title}</h1>
          <StyledCardFeatures>
            <li>
              <ImLocation />
              {job.jobs.categoryCopy}
            </li>
            <li>
              <GiReceiveMoney />
              {job.jobs.salary}
            </li>
            <li>
              <ImCalendar />
              {job.jobs.hoursPerWeek}
            </li>
            <li>
              <FaBuilding />
              {job.jobs.education}
            </li>
            <li>
              <FaExclamationCircle />
              {job.jobId}
            </li>
          </StyledCardFeatures>
          <StyledSlugDescription>
            {job.content.replace(/<\/?[^>]+(>|$)/g, "")}`
          </StyledSlugDescription>
          <a> SOLLICITEER DIRECT</a>
        </StyledBannerIntro>
      </StyledSlugBanner>
      <BodySection>
        <div>{job.jobs.jobDescription}</div>
        <div>{job.jobs.aboutYou}</div>
        <div>{job.jobs.offer}</div>
      </BodySection>

      <Footer></Footer>
    </div>
  );
}
export const StyledSlugDescription = styled.div`
  margin: 20px 0 40px 0;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 25px; /* fallback */
  max-height: 130px; /* fallback */
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const BodySection = styled.section`
  height: 100%;
  padding: 60px 30px 0px 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    max-width: 1200px;
    margin: 0 0 40px 0;
    font-size: 1.4rem;
  }
`;
export const StyledSlugBanner = styled.div`
  display: flex;
  align-content: center;
  /* justify-content: center; */
  /* height: 35vh; */
  width: 100%;
  @media screen and (max-width: 818px) {
    flex-direction: column;
  }
`;
export const StyledBannerImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-right: -20px;
  z-index: 1;
  @media screen and (max-width: 818px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    @media screen and (max-width: 818px) {
      height: 100%;
    }
  }
`;
export const StyledBannerIntro = styled.div`
  width: 100%;
  padding: 20px 60px 40px 60px;
  background-color: ${(props) => props.theme.colors.color2};
  @media screen and (max-width: 818px) {
    padding: 20px 30px;
  }

  a {
    background-color: ${(props) => props.theme.colors.color5};
    width: fit-content;
    line-height: 1.2rem;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 700;
  }
`;
const StyledCardFeatures = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 8px 0;
  list-style: none;
  font-size: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
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

export async function getStaticProps({ params }) {
  const GET_JOB_URI = gql`
    query GET_JOB_URI($id: ID!) {
      job(id: $id, idType: URI) {
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        jobId
        jobs {
          aboutYou
          category
          categoryCopy
          education
          fieldGroupName
          hoursPerWeek
          jobDescription
          offer
          salary
        }
        title
        content
        uri
      }
    }
  `;

  const response = await client.query({
    query: GET_JOB_URI,
    variables: {
      id: params.uri,
    },
  });

  const job = response?.data?.job;

  return {
    props: {
      job,
    },
  };
}
export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
