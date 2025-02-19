import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: clamp(15px, 4vw, 67px) clamp(8px, 2vw, 16px);
`

export const HeaderHome = styled.p`
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 21px);
    font-size: clamp(15px, 2vw, 30px);
    padding: 18px 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`