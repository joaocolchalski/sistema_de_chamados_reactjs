import { useContext, useState } from "react";
import { LuPen } from "react-icons/lu";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { AppContext } from "../../contexts/app";
import { toast } from "react-toastify";

import Header from "../../components/Header"
import Title from "../../components/Title";
import {
    Screen,
    Content,
    Container,
    Label,
    Input,
    Button,
    FormProfile
} from "../Settings/style"

export default function Clients() {
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')

    const { user } = useContext(AppContext)

    async function handleAddClient(e) {
        e.preventDefault()

        if (name.trim().length === 0 || cnpj.trim().length === 0 || address.trim().length === 0) {
            toast.warn('Preencha todos os campos!')
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
                toast.success('Cliente cadastrado com sucesso!')
                setName('')
                setCnpj('')
                setAddress('')
            })
            .catch((err) => {
                toast.error('Erro ao cadastrar o cliente!')
                console.log(err.code)
            })
    }

    return (
        <Screen>
            <Header />

            <Content>
                <Title icon={<LuPen />} title={'Novo Cliente'} />

                <Container>
                    <FormProfile onSubmit={handleAddClient}>
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

                        <Button type="submit">Salvar</Button>
                    </FormProfile>
                </Container>
            </Content>
        </Screen>
    )
}