import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--pink-airu);
    border-left: 5px solid var(--green-airu);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    background: var(--pink-airu);
  }
  .btn:hover{
    background: var(--green-airu);
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--orange-airu);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper