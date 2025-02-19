import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export const ContainerSettings = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: clamp(15px, 4vw, 67px) clamp(8px, 2vw, 16px);
`

export const HeaderSettings = styled.p`
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 21px);
    font-size: clamp(15px, 2vw, 30px);
    padding: 18px 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export const ButtonUploadPhotoSettings = styled.button`
    width: clamp(100px, 14vw, 200px);
    height: clamp(100px, 14vw, 200px);
    border-radius: 50%;
    background-image: url(${({ photoURL }) => photoURL});
    background-size: cover;
    background-color: #000;
    border: 0;
    color: #fff;
    font-size: clamp(21px, 3vw, 42px);
    margin-top: clamp(20px, 5vw, 79px);
`

export const LabelSettings = styled.label`
    margin-top: clamp(10px, 3vw, 39px);
    font-weight: bold;
    font-size: clamp(15px, 3vw, 25px);
`

export const InputSettings = styled.input`
    margin-top: clamp(5px, 2vw, 13px);
    height: clamp(23px, 3vw, 46px);
    font-size: clamp(10px, 3vw, 20px);
    border: 0;
    padding: clamp(5px, 3vw, 11px) clamp(2px, 1vw, 15px);
    width: clamp(200px, 25vw, 450px);
`

export const ButtonSaveSettings = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 150px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 38px;
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`

export const ButtonSignOut = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 150px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 38px;
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`