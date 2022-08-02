import styled from "styled-components";

export const Button = styled.button`
background: var(--orange-airu);
width: 180px;
height: 40px;
border-radius: 5px;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;

&:hover{
  background: var(--green-airu);
}
`;

export const Box = styled.div`
width: 60%;
padding: 0;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
margin-top: 30px;
`;