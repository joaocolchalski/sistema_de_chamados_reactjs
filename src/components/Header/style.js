import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from '../../assets/cover.png'

export const Container = styled.div`
    width: 200px;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #121212;
    overflow: auto;
    position: fixed;

    @media(max-width: 700px){
        width: 100%;
        height: auto;
        position: relative;
    }
`

export const ContainerImgUser = styled.div`
    background-image: url(${cover});
    background-color: #121212;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 150px;
    padding-top: 30px;

    @media(max-width: 700px){
        display: none;
    }
`

export const ImgUser = styled.img`
    background-color: #000;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: block;
    margin: auto;
    object-fit: cover;
    filter: drop-shadow(2px 3px 6px #121212);
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
`

export const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: rgba(255,255,255,0.7);
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 0.5rem;
    transition: ease-in-out 0.5s;

    ${({ $active }) => $active && `
        background-color: #181C2E;
        color: #fff;
    `}

    &:hover{
        background-color: #181C2E;
        color: #fff;
    }

    @media(max-width: 700px){
        float: left;
    }

    @media(max-width: 400px){
        text-align: center;
        float: none;
    }
`