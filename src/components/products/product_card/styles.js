import styled from "styled-components";

export const ProductoCard = styled.div`
background: #FFBADC;
width: 300px;
border-radius: 15px;
padding: 1rem;
img{
    width: 100%;
    margin-bottom: 1rem;
}

h2{
    font-weight: 600;
    margin: 0;
    text-align: center;
}   

p{
    text-align: center;
    font-weight: 600;
}
@media (max-width:768px){
    width:250px;
    text-align: left;
}
`