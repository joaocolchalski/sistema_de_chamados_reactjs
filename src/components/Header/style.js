import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from '../../assets/cover.png'

export const Container = styled.div`
    display: flex;
    height: auto;
    min-height: 100vh;
    width: 20%;
    max-width: 200px;
    min-width: 170px;
    flex-direction: column;
`

export const ContainerImgUser = styled.div`
    background-image: url(${cover});
    background-size: cover;
    width: 100%;
    height: auto;
    max-height: 252px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`

export const ImgUser = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    min-height: 100px;
    border-radius: 50%;
    border: 0;
    background-image: url(${({ photoURL }) => photoURL});
    background-size: cover;
    background-color: #000;
    margin: 20px;
`

export const ContainerButtonsNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 12px;
    font-size: 16px;
    gap: 12px;
    transition: background-color 0.5s ease;

    ${({ active }) => active && `background-color: #181C2E;`}

    &:hover{
        background-color: #181C2E;
    }
`