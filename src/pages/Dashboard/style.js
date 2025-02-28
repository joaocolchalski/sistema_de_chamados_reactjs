import styled from "styled-components";

export const WithoutCalledsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 40px 5px;
`

export const Text = styled.h1`
    font-size: 25px;
`

export const ButtonNewCalled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 40px;
    width: 180px;
    border: 0;
    background-color: #83BF02;
    color: #fff;
    gap: 5px;
    border-radius: 5px;
    transition: ease-in-out 0.3s;
    margin-top: 10px;

    &:hover{
        background-color: #5fd204;
        transform: scale(1.05);
    }
`

export const TableContainer = styled.table`
    border: 1px solid #ccc;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    margin-top: 10px;
    width: 100%;

    @media(max-width: 911px){
        border: 0;
    }
`

export const TableHead = styled.thead`
    @media(max-width: 911px){
        border: none;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`

export const TableHeader = styled.th`
    text-align: center;
    padding: 0.60em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.85em;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;

    @media(max-width: 911px){
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.60em;
    }
`

export const TableData = styled.td`
    padding: 0.60em;
    text-align: center;

    @media(max-width: 911px){
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;
    }
`
export const LabelStatus = styled.label`
    color: #fff;
    padding: 3px;
    border-radius: 5px;
    
    ${({ $calledStatus }) => $calledStatus === 'Em Aberto' && `
        background-color: #FD441B;
    `}

    ${({ $calledStatus }) => $calledStatus === 'Em Progresso' && `
        background-color: #F6A935;
    `}

    ${({ $calledStatus }) => $calledStatus === 'Atendido' && `
        background-color: #5CB85C;
    `}
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media(max-width: 911px){
        justify-content: flex-end;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: ${({ $backColor }) => $backColor};
    color: #fff;
    font-size: 18px;
    padding: 3px 5px;
    border-radius: 2px;
    transition: ease-in-out 0.3s;

    &:hover{
        transform: scale(1.08);
    }
`