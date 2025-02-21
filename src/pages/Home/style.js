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
    margin-bottom: 10px;
`

export const ButtonNewCalled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 100%;
    max-height: 40px;
    min-height: 32px;
    width: 100%;
    max-width: 180px;
    min-width: 80px;
    border: 0;
    background-color: #83BF02;
    color: #fff;
    gap: 5px;
    border-radius: 5px;
`

export const CalledsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

export const TableContainer = styled.table`
    border-collapse: collapse;
    margin-top: 10px;
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    border-right: 1px solid #000;
    border-left: 1px solid #000;
`

export const TableHeader = styled.th`
    text-align: left;
    padding: 5px 10px;
    border: 1px solid #000;
`

export const TableData = styled.td`
    padding: 5px 10px;
    border-bottom: 1px solid #000;

    
`
export const LabelStatus = styled.label`
    color: #fff;
    padding: 3px;
    border-radius: 5px;
    
    ${({ calledStatus }) => calledStatus === 'Em Aberto' && `
        background-color: #FD441B;
    `}

    ${({ calledStatus }) => calledStatus === 'Em Progresso' && `
        background-color: #F6A935;
    `}

    ${({ calledStatus }) => calledStatus === 'Atendido' && `
        background-color: #5CB85C;
    `}
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: ${({ backColor }) => backColor};
    color: #fff;
    font-size: 18px;
    padding: 3px 5px;
    border-radius: 2px;
`