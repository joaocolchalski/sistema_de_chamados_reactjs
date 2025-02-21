import {
    Overlay,
    ModalContent
} from './style'

export default function Modal({ isOpen, onClose, called }) {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>Meu Modal</h2>
                <p>Conteúdo do modal aqui...</p>
                <button onClick={onClose}>Fechar</button>
                {called.id}
            </ModalContent>
        </Overlay>
    );
}