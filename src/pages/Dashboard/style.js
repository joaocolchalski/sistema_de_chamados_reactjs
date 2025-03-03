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
    float: right;
    margin: 10px 0;
    background-color: #83BF02;
    padding: 0.5em;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    font-weight: 600;
    color: #fff;
    gap: 5px;
    font-size: 20px;
    transition: ease-in-out 0.5s;

    &:hover{
        background-color: #5fd204;
        transform: scale(1.05);
    }
`

export const TableContainer = styled.table`
    border: 1px solid #ccc;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    @media(max-width: 600px){
        border: 0;
    }
`

export const TableHead = styled.thead`
    @media(max-width: 600px){
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

    @media(max-width: 600px){
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: 0.60em;
    }
`

export const TableData = styled.td`
    padding: 0.60em;
    text-align: center;

    @media(max-width: 600px){
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;

        &::before{
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
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

    @media(max-width: 600px){
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

export const ButtonMore = styled.button`
    margin-top: 10px;
    padding: 0.5em 1em;
    border: 1px solid #181c2e;
    background-color: #fff;
    color: #181c2e;
    border-radius: 5px;
    font-size: 1.1em;
    transition: ease-in-out 0.5s;

    &:hover{
        background-color: #181c2e;
        color: #fff;
    }
`