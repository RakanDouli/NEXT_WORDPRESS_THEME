import Head from 'next/head'
import Footer from '../components/Footer'
import { client } from '../lib/apollo';
import {gql} from '@apollo/client'

export default function SlugPage({ post }) {
console.log('%c[uri].js line:8 post', 'color: #007acc;', post);
 return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
          <div className="siteHeader">
            <h1 className="title">
                {post?.title}
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${post?.author.firstName} ${post?.author.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>

          </div>
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
            {post.vacatures.city?  <h1>city: {`${post.vacatures.city}`}</h1>:'' }
           {post.vacatures.salary?  <h1>Salary: {`${post.vacatures.salary}`}</h1>:''

           }
          
      </main>


      <Footer></Footer>

    </div>
  )
}


export async function getStaticProps({ params }){
  const GET_POST_URI=gql`
    query GET_POST_URI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      date
      uri
      author {
      firstName
      lastName
      }
      vacatures {
      city
      salary
    }

    }
  }`
  console.log(GET_POST_URI)
  const response = await client.query({
    query:GET_POST_URI,
    variables:{
      id:params.uri
    }
  })

  const post = response?.data?.post

  return {
    props: {
      post
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