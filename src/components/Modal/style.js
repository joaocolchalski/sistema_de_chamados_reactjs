import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 2px;
  width: 650px;
  height: 400px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 30px;
`

export const ButtonExit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FD441B;
  font-size: 16px;
  padding: 3px 8px;
  border: 0;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  gap: 4px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 4px;
`

export const Label = styled.label`
    font-weight: bold;
    font-size: 14px;
`

export const Info = styled.p`
    font-size: 14px;
    margin-right: 10px;
`

export const InfoComplement = styled.p`
    font-size: 14px;
    margin-top: 5px;
`

export const ComplementContainer = styled.div`
  display: flex;
  flex-direction: column;
`