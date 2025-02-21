import { IoAdd } from "react-icons/io5"
import { LuPen } from "react-icons/lu"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../../firebaseConnection"
import { AuthContext } from "../../contexts/app"

import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title,
    Label
} from "../Settings/style"
import {
    TextArea,
    Select,
    Option
} from "./style"

export default function New() {
    const [clients, setClients] = useState([])

    const subjects = ['Suporte', 'Visita Técnica', 'Financeiro']

    const { id } = useParams()

    const { user } = useContext(AuthContext)

    useEffect(() => {
        async function loadClients() {
            const collectionRef = collection(db, 'clients')
            const q = query(collectionRef, orderBy('name', 'asc'), where('userUID', '==', user.uid))

            await getDocs(q)
                .then((clients) => {
                    let listClients = []
                    clients.forEach((client) => {
                        listClients.push({
                            id: client.id,
                            name: client.data().name
                        })
                    })
                    setClients(listClients)
                    console.log(listClients)
                })
                .catch((err) => {
                    alert('Erro ao carregar a lista de clientes!')
                    console.log(err.code)
                })
        }

        loadClients()
    }, [])

    return (
        <Screen>
            <Header />
            <Container>
                <Title>
                    {id ? <LuPen /> : <IoAdd />}{id ? 'Editando Chamado' : 'Novo Chamado'}
                </Title>

                <Label>Cliente</Label>
                <Select>
                    {clients.map((client) => (
                        <Option>{client.name}</Option>
                    ))}
                </Select>

                <Label>Assunto</Label>
                <Select>
                    {subjects.map((subject) => (
                        <Option>{subject}</Option>
                    ))}
                </Select>

                <Label>Status</Label>


                <Label>Complemento</Label>
                <TextArea
                    placeholder="Descreva seu problema. (Opcional)"
                />
            </Container>
        </Screen>
    )
}