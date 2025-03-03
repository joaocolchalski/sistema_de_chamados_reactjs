import styled from "styled-components";

export const Screen = styled.div``

export const Content = styled.div`
    margin-left: 200px;
    padding: 16px;

    @media(max-width: 700px){
        margin-left: 0;
    }
`

export const Container = styled.div`
    display: flex;
    background-color: #f8f8f8;
    border-radius: 5px;
    padding: 0.8em;
    align-items: center;
    margin-top: 10px;

    ${({ id }) => id === 'dashboard' && `
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}
`

export const FormProfile = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const LabelUploadPhotoSettings = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 288px;
    height: 288px;
    border-radius: 50%;
    background-image: url(${({ $photoURL }) => $photoURL});
    background-size: cover;
    background-color: #000;
    border: 0;
    color: #fff;
    font-size: 20px;
    margin-bottom: 1em;
    object-fit: cover;
    cursor: pointer;
`

export const Span = styled.span`
    z-index: 99;
    position: absolute;
    opacity: 0.7;
    transition: ease-in-out 0.5s;

    &:hover{
        opacity: 1;
        transform: scale(1.4);
    }
`

export const InputUploadPhotoSetting = styled.input`
    display: none;
`

export const Label = styled.label`
    margin-bottom: 0.3em;
    font-weight: bold;
    font-size: 1.4em;
`

export const Input = styled.input`
    margin-bottom: 2em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    
    &:disabled{
        cursor: not-allowed;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    width: 100%;
    max-width: 120px;
    border: 1px solid #181c2e;
    background-color: #fff;
    color: #181c2e;
    font-size: 1.5em;
    border-radius: 5px;
    transition: ease-in-out 0.5s;

    &:hover{
        background-color: #181c2e;
        color: #fff;
    }
`