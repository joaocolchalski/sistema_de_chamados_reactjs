import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/app"
import { LuMessageCircle, LuPen } from "react-icons/lu";
import { IoAdd, IoClose, IoSearch } from "react-icons/io5";
import { getDocs, query, where, orderBy, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title
} from "../Settings/style";

import {
    WithoutCalledsContainer,
    Text,
    ButtonNewCalled,
    CalledsContainer,
    TableContainer,
    TableBody,
    TableRow,
    TableHeader,
    TableData,
    LabelStatus,
    Buttons,
    Button
} from "./style";

export default function Home() {
    const [calleds, setCalleds] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        async function loadCalleds() {
            const collectionRef = collection(db, 'calleds')

            const q = query(collectionRef, orderBy('createdAt', 'desc'), where('userUID', '==', user.uid))

            onSnapshot(q, (calleds) => {
                let listCalleds = []
                calleds.forEach((called) => {
                    listCalleds.push({
                        id: called.id,
                        client: called.data().client,
                        complement: called.data().complement,
                        createdAt: called.data().createdAt.seconds,
                        status: called.data().status,
                        subject: called.data().subject
                    })
                })

                setCalleds(listCalleds)
            })
        }

        loadCalleds()
    }, [])

    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuMessageCircle /> Atendimentos
                </Title>

                {calleds.length > 0 ? (
                    <CalledsContainer>
                        <ButtonNewCalled style={{ alignSelf: 'flex-end' }}>
                            <IoAdd /> Novo chamado
                        </ButtonNewCalled>

                        <TableContainer>
                            <TableBody>
                                <TableRow>
                                    <TableHeader>
                                        Código
                                    </TableHeader>

                                    <TableHeader>
                                        Cliente
                                    </TableHeader>

                                    <TableHeader>
                                        Assunto
                                    </TableHeader>

                                    <TableHeader>
                                        Status
                                    </TableHeader>

                                    <TableHeader>
                                        Cadastrado em
                                    </TableHeader>

                                    <TableHeader>

                                    </TableHeader>
                                </TableRow>
                                {calleds.map((called) => (
                                    <TableRow key={called.id}>
                                        <TableData>
                                            {called.id}
                                        </TableData>

                                        <TableData>
                                            {called.client}
                                        </TableData>

                                        <TableData>
                                            {called.subject}
                                        </TableData>

                                        <TableData>
                                            <LabelStatus calledStatus={called.status}>{called.status}</LabelStatus>
                                        </TableData>

                                        <TableData>
                                            {format(new Date(called.createdAt * 1000), 'dd/MM/yyyy', { locale: ptBR })}
                                        </TableData>

                                        <TableData>
                                            <Buttons>
                                                <Button backColor={'#3583F6'}>
                                                    <IoSearch />
                                                </Button>

                                                <Button backColor={'#F6A935'}>
                                                    <LuPen />
                                                </Button>

                                                <Button backColor={'#FD441B'}>
                                                    <IoClose />
                                                </Button>
                                            </Buttons>
                                        </TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableContainer>
                    </CalledsContainer>
                ) : (
                    <WithoutCalledsContainer>
                        <Text>Nenhum chamado registrado...</Text>
                        <ButtonNewCalled>
                            <IoAdd /> Novo chamado
                        </ButtonNewCalled>
                    </WithoutCalledsContainer>
                )}
            </Container>
        </Screen>
    )
}