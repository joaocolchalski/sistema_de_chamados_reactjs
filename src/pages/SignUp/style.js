import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 631px;
    background-color: #eaeaec;
`

export const LogoContainer = styled.div`
    width: 100%;
    background-color: #181c2e;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainerImg = styled.img`
    height: 71.5%;
    max-height: 128px;
`

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 48px 22px;
`

export const FormContainerInput = styled.input`
    padding: 0 8px;
    width: 100%;
    border: 0;
    height: 36px;
    font-size: 18px;
    margin-bottom: 14px;
    background-color: #fff;
    border-radius: 5px;
`

export const FormContainerButton = styled.button`
    width: 100%;
    border: 0;
    height: 36px;
    background-color: #181c2e;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin-bottom: 8px;
`

export const StyledLink = styled(Link)`
    font-size: 14px;
    color:#000;
    text-decoration: none;
`