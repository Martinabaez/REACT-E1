import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 1300px;
margin 0 auto;
gap: 30px;

h1 {
    margin-bottom: 2rem;
}

 @media (max-width:1000px)
 flex-direction: column;
}
`
export const Home= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 150px;

@media (max-width: 768px) {
    margin-bottom: 80px;
}

`
export const HeaderTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center ;
align-items: flex-start;
width: 50%;
h1{
    font-size: 3.5rem;
    margin: 10px 0px;
     color:#FF005C;
}

p{
    font-size: 1.2rem;
    color: black;
    
}

 @media (max-width:1000px){
    width: 80%;
    align-items:center;
    text-align: center;
 }

`

export const HeaderImageContainer = styled.div`
width: 40%;
img{
    width: 100%;
    margin-top:10%;
    padding-bottom: 75px;

}
@media (max-width:1000px){
display:none;
}
`