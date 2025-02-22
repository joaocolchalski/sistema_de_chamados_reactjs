import { IoClose } from 'react-icons/io5';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
    Overlay,
    ModalContent,
    ButtonContainer,
    ButtonExit,
    Container,
    Label,
    Info,
    InfoComplement,
    ComplementContainer
} from './style'

import {
    LabelStatus
} from '../../pages/Home/style';

export default function Modal({ isOpen, onClose, called }) {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ButtonContainer>
                    <ButtonExit onClick={onClose}>
                        <IoClose />Voltar
                    </ButtonExit>
                </ButtonContainer>

                <Container>
                    <Label>Cliente:</Label>
                    <Info>{called.client}</Info>
                </Container>

                <Container>
                    <Label>Assunto:</Label>
                    <Info>{called.subject}</Info>

                    <Label>Cadastrado em:</Label>
                    <Info>{format(new Date(called.createdAt * 1000), 'dd/MM/yyyy', { locale: ptBR })}</Info>
                </Container>

                <Container>
                    <Label>Status:</Label>
                    <Info><LabelStatus calledStatus={called.status}>{called.status}</LabelStatus></Info>
                </Container>

                <ComplementContainer>
                    <Label>Complemento:</Label>
                    <InfoComplement>{called.complement}</InfoComplement>
                </ComplementContainer>
            </ModalContent>
        </Overlay>
    );
}