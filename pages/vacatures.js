import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { client } from '../lib/apollo';
// import { getAllPosts } from '../lib/test-data';
import {gql} from '@apollo/client'
import { useState } from 'react';

export default function vacatures({ posts }) {
    const [searchField, setSearchField] = useState("");
    const handleChange = e => {
        setSearchField(e.target.value);

      };
      const filteredPersons = posts.filter(
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
            filteredPersons.map((post) => {
              return (
                <PostCard key={post.uri} post={post}></PostCard>
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
  const GET_POSTS=gql`
  query GET_ALL_POSTS {
    posts {
      nodes {
        title
        content
        uri
        date
      }
    }
  }`
  const response=await client.query({
    query: GET_POSTS,
  })
  
  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts
    }
  }
}
