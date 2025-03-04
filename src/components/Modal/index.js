import { IoClose } from 'react-icons/io5';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
    Overlay,
    Container,
    Main,
    Row,
    ButtonExit,
    Span,
    I,
    P
} from './style'

import {
    LabelStatus
} from '../../pages/Dashboard/style';

import {

} from '../../pages/Settings/style';

export default function Modal({ onClose, called }) {
    return (
        <Overlay onClick={onClose}>
            <Container onClick={(e) => e.stopPropagation()}>
                <ButtonExit onClick={onClose}>
                    <IoClose />Voltar
                </ButtonExit>

                <Main>
                    <Row>
                        <Span>Cliente: <I>{called.client}</I></Span>
                    </Row>

                    <Row>
                        <Span>Assunto: <I>{called.subject}</I></Span>
                        <Span>Cadastrado em: <I>{format(new Date(called.createdAt * 1000), 'dd/MM/yyyy', { locale: ptBR })}</I></Span>
                    </Row>

                    <Row>
                        <Span>Status: <I><LabelStatus $calledStatus={called.status}>{called.status}</LabelStatus></I></Span>
                    </Row>

                    {called.complement.trim().length > 0 && (
                        <>
                            <Span>Complemento:</Span>
                            <P>{called.complement}</P>
                        </>
                    )}
                </Main>
            </Container>
        </Overlay>
    );
}