import { useContext, useState } from "react";
import { LuPen } from "react-icons/lu";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { AuthContext } from "../../contexts/app";

import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title,
    Label,
    Input,
    ButtonSave
} from "../Settings/style"

export default function Clients() {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')

    const { user } = useContext(AuthContext)

    async function handleAddClient(name, cnpj, address) {
        if (name.trim().length === 0 || cnpj.trim().length === 0 || address.trim().length === 0) {
            alert('Preencha todos os campos!')
            return
        }

        const collectionRef = collection(db, 'clients')

        await addDoc(collectionRef, {
            name: name,
            cnpj: cnpj,
            address: address,
            userUID: user.uid
        })
            .then(() => {
                alert('Cliente cadastrado com sucesso!')
                setName('')
                setCnpj('')
                setAddress('')
            })
            .catch((err) => {
                alert('Erro ao cadastrar o cliente!')
                console.log(err.code)
            })
    }

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