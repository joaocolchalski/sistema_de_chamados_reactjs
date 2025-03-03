import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 12px;
    background-color: #121212;
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
`

export const LogoImg = styled.img`
    width: 170px;
    height: 130px;
    padding: 20px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    width: 90%;
`

export const FormInput = styled.input`
    margin-bottom: 1rem;
    height: 35px;
    border-radius: 5px;
    border: 0;
    padding: 10px;
    font-size: 15px;
    background-color: #fff;
`

export const FormButton = styled.button`
    height: 35px;
    border: 0;
    border-radius: 5px;
    background-color: #181c2e;
    color: #fff;
    font-size: 1.3rem;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    color:#000;
    text-decoration: none;
    margin: 1.5rem 0;
`