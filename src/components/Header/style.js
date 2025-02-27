import { Link } from "react-router-dom";
import styled from "styled-components";
import cover from '../../assets/cover.png'

export const Container = styled.div`
    width: 200px;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: auto;

    @media(max-width: 700px){
        width: 100%;
        height: auto;
        position: relative;
    }
`

export const ContainerImgUser = styled.div`
    background-image: url(${cover});
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
    transition: background-color 0.5s ease, color 0.5s ease;

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

export const Content = styled.div`
    margin-left: 200px;
    padding: 1px 16px;

    @media(max-width: 700px){
        margin-left: 0;
    }
`