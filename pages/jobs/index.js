import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import ApplictationCard from "../../components/application-container/application-card/ApplicationCard";
import { client } from "../../lib/apollo";
// import { getAllPosts } from '../lib/test-data';
import { gql } from "@apollo/client";
import { useState } from "react";
import Header from "../../components/header/Header";
import styled from "styled-components";
import ApplicationContainer from "../../components/application-container/ApplicationContainer";
export default function jobs({ jobs }) {
  const [searchField, setSearchField] = useState("");
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  // let uniqueItems = [...new Set(items)]
  const filtered = jobs.filter((post) => {
    return post.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <Head>
        <title>Werken By site</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Header></Header>

      <ApplicationContainer
        VacaturesFound={filtered.length}
        handleChange={handleChange}
      >
        {filtered.map((job) => {
          return <ApplictationCard key={job.uri} job={job}></ApplictationCard>;
        })}
      </ApplicationContainer>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_JOBS = gql`
    query GET_ALL_JOBS {
      jobs {
        nodes {
          date
          jobs {
            hoursPerWeek
            jobDescription
            salary
            category
            categoryCopy
            education
          }
          uri
          title
          jobId
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_JOBS,
  });

  const jobs = response?.data?.jobs?.nodes;
  return {
    props: {
      jobs,
    },
  };
}
export const BodySection = styled.section`
  min-height: 85vh;
  height: 100%;
  padding: 40px 30px;
`;
