import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from '../../assets/cover.png'

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 25%;
    max-width: 426px;
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

export const ImgUser = styled.img`
    background-color: black;
    width: 50%;
    max-width: 172px;
    height: auto;
    max-height: 172px;
    border-radius: 50%;
    margin: 42px 0;
    object-fit: cover;
`

export const ContainerButtonsNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: clamp(20px, 2vw, 40px);
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: clamp(14px, 2vw, 28px);
    gap: 24px;
    padding-left: clamp(10px, 2vw, 30px);
    padding-top: clamp(12px, 2vw, 24px);
    padding-bottom: clamp(12px, 2vw, 24px);
    transition: background-color 0.5s ease;

    ${({ active }) => active && `background-color: #181C2E;`}

    &:hover{
        background-color: #181C2E;
    }
`