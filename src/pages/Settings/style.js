import styled from "styled-components";

export const Screen = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    height: auto;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #fff;
    padding: 15px;
`

export const Title = styled.p`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 22px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export const InputUploadPhotoSetting = styled.input``

export const LabelUploadPhotoSettings = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    min-height: 100px;
    border-radius: 50%;
    background-image: url(${({ photoURL }) => photoURL});
    background-size: cover;
    background-color: #000;
    border: 0;
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
`

export const Label = styled.label`
    margin-top: 30px;
    font-weight: bold;
    font-size: 14px;
`

export const Input = styled.input`
    margin-top: 8px;
    height: 40px;
    border: 0;
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    padding: 8px 12px;
    font-size: 16px;
    
    ${({ id }) => id === 'input-email' && `
        cursor: not-allowed;
    `}
`

export const ButtonSave = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: 40px;
    min-height: 32px;
    width: 100%;
    max-width: 120px;
    min-width: 80px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color 0.5s ease, color 0.5s ease;
    font-weight: bold;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`

export const ButtonSignOut = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: 40px;
    min-height: 32px;
    width: 100%;
    max-width: 120px;
    min-width: 80px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.5s ease, color 0.5s ease;
    font-weight: bold;

    &:hover{
        background-color: #000;
        color: #fff;
    }
`