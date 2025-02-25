import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    min-height: 100vh;
    padding: 0 12px;
`

export const Login = styled.div`
    width: 90%;
    max-width: 600px;
    background-color: #eaeaec;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const LogoArea = styled.div`
    width: 100%;
    background-color: #181c2e;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 100%;
    height: auto;
    max-width: 170px;
    padding: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    width: 90%;
`

export const FormInput = styled.input`
    padding: 10px;
    border: 0;
    height: 35px;
    font-size: 15px;
    margin-bottom: 1rem;
    background-color: #fff;
    border-radius: 5px;
`

export const FormButton = styled.button`
    border: 0;
    height: 35px;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.3rem;
    border-radius: 5px;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    color:#000;
    text-decoration: none;
    margin: 1.5rem 0;
`