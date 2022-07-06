import Head from 'next/head';
import Footer from '../../components/Footer';
import ApplictationCard from '../../components/ApplictationCard';
import { client } from '../../lib/apollo';
// import { getAllPosts } from '../lib/test-data';
import {gql} from '@apollo/client'
import { useState } from 'react';

export default function jobs({ jobs }) {
    const [searchField, setSearchField] = useState("");
    const handleChange = e => {
        setSearchField(e.target.value);

      };
      const filteredPersons = jobs.filter(
        post => {
          return (
            post
            .title
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );

  return (
    <div className="container">
      <Head>
        <title>Werken By site</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
         Search vacatures
        </h1>
        <div>
        <label htmlFor="search"> Search </label>
        <input  type="search" onChange={handleChange} />
        </div>


        <div className="grid">
          {
            filteredPersons.map((job) => {
              return (
                <ApplictationCard key={job.uri} job={job}></ApplictationCard>
              )
            })
          }
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(){
  const GET_JOBS=gql`
  query GET_ALL_JOBS {
    jobs {
      nodes {
        title
        content
        uri
        date
      }
    }
  }`
  const response=await client.query({
    query: GET_JOBS,
  })
  
  const jobs = response?.data?.jobs?.nodes
  return {
    props: {
      jobs
    }
  }
}
