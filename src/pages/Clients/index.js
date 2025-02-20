import { useContext, useState } from "react";
import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title,
    Label,
    Input,
    ButtonSave
} from "../Settings/style"

import { LuPen } from "react-icons/lu";
import { AuthContext } from "../../contexts/app";

export default function Clients() {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')

    const { handleAddClient } = useContext(AuthContext)

    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuPen /> Novo Cliente
                </Title>

                <Label>Nome do Cliente</Label>
                <Input
                    type="text"
                    placeholder="Digite o nome do cliente..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Label>CNPJ</Label>
                <Input
                    type="text"
                    placeholder="Digite o CNPJ do cliente..."
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                />

                <Label>Endereço</Label>
                <Input
                    type="text"
                    placeholder="Digite o endereço do cliente..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <ButtonSave onClick={() => handleAddClient(name, cnpj, address)}>Salvar</ButtonSave>
            </Container>
        </Screen>
    )
}