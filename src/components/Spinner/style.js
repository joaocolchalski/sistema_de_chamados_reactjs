import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #efefef;
    padding: 15px;
`

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #ddd;
    border-top: 5px solid #181c2e;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;    
`