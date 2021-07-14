import styled from 'styled-components'

const MainGrid = styled.main`
  widht: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-widht: 500px;
  padding: 24px 128px 68px 128px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  
  @media(min-width: 860px) {
    max-widht: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea WelcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;