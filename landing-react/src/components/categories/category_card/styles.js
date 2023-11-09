import styled from "styled-components";

export const  CardCategoria = styled.div `
display:flex;
flex-direction:column;
width: 150px;
margin: 0 15px;
align-items:center;
gap: 0.5rem;
padding: 2rem 0.5rem;
border-radius: 15px;
cursor: pointer;

h2{
    font-size: 1rem;
}

@media (max-width:768px){
    padding-top: 30px;
   text-align: center;
}
`

