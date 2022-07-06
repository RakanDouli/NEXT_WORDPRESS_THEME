import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'

export default function home() {
  return (
    <div>
      <Header></Header>
        <BodySection className='body-section'>
          <h1>Home page</h1>
          <h2>Werken Bij</h2>

        </BodySection>
      <Footer></Footer>
    </div>
  )
}
export const BodySection=styled.section`
min-height: 80vh;
height: 100%;
`