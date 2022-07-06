import styled from "styled-components"

export default function Footer (){
    return (
        <StyledFooter>
            <a
            href="https://developers.wpengine.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Part of the WP Engine Headless Developers Road Map 🗺️ 
            </a>
        </StyledFooter>
    )
}

const StyledFooter=styled.footer`
background-color: ${props=>props.theme.colors.color2};
padding: 15px 30px;
margin-top: 40px;

a{
    color:${props=>props.theme.colors.white}
}
`