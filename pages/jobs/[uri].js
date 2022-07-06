import Head from 'next/head'
import Footer from '../../components/Footer'
import { client } from '../../lib/apollo';
import {gql} from '@apollo/client'

export default function SlugPage({ job }) {
console.log('%c[uri].js line:8 job', 'color: #007acc;', job);
 return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

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