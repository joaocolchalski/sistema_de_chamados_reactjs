import styled from "styled-components";

export const Select = styled.select`
    margin-bottom: 2em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
`

export const Option = styled.option`

`

export const TextArea = styled.textarea`
    margin-bottom: 2em;
    padding: 0.7em;
    border: 0;
    border-radius: 5px;
    max-width: 600px;
    height: 105px;
    resize: none;
`

export const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
`

export const Span = styled.span`
    padding: 4px;
    font-size: 16px;
`

export const RadioInput = styled.input`
    &:not(:first-child){
        margin-left: 15px;
    }
` 