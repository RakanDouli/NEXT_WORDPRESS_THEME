import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import { client } from '../../lib/apollo';
import {gql} from '@apollo/client'
import Header from '../../components/header/Header';

export default function SlugPage({ job }) {

 return (
    <div>
      <Head>
        <title>Job Application Page</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Header></Header>
      <main>
      
            <h1 className="title">
                {job?.title}
            </h1>
  
           
          
      </main>


      <Footer></Footer>

    </div>
  )
}


export async function getStaticProps({ params }){

  const GET_JOB_URI=gql`
    query GET_JOB_URI($id: ID!) {
    job(id: $id, idType: URI) {
      title
      content
      date
      uri
    
 

    }
  }`

  const response = await client.query({
    query:GET_JOB_URI,
    variables:{
      id:params.uri
    }
  })

  const job = response?.data?.job

  return {
    props: {
      job
    }
  }

}

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}