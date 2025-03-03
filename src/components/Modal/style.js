import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  padding: 4em 2em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`

export const ButtonExit = styled.button`
  background-color: #FD441B;border: 0;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 3px 8px;
  gap: 4px;
  margin-bottom: 1.2em;
`

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.1em;
`

export const I = styled.i`
  font-weight: 400;
  margin-right: 1em;
  padding: 2px 8px;
`

export const Main = styled.main`
`

export const Row = styled.div`
  margin-bottom: 1em;
`

export const P = styled.p`
  margin-top: 0.5em;
  max-width: 100%;
  white-space: pre-wrap;
  line-height: 150%;
`