import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../contexts/app"
import { LuMessageCircle, LuPen } from "react-icons/lu";
import { IoAdd, IoClose, IoSearch } from "react-icons/io5";
import { query, where, orderBy, collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../../components/Header"
import SpinnerLoading from "../../components/Spinner";
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
import Modal from "../../components/Modal";

export default function Dashboard() {
    const [calleds, setCalleds] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false);
    const [calledModal, setCalledModal] = useState({})

    const { user } = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCalleds() {
            const collectionRef = collection(db, 'calleds')

            const q = query(collectionRef, orderBy('createdAt', 'desc'), where('userUID', '==', user?.uid))

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
                setLoading(false)
            })
        }

        loadCalleds()
    }, [user?.uid])

    async function handleDeleteCalled(id) {
        const docRef = doc(db, 'calleds', id)
        await deleteDoc(docRef)
            .then(() => {
                toast.success('Chamado deletado com sucesso!')
            })
            .catch((err) => {
                toast.error('Erro ao deletar o chamado!')
                console.log(err.code)
            })
    }

    if (loading) {
        return (
            <SpinnerLoading />
        )
    }

    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuMessageCircle /> Atendimentos
                </Title>

                {calleds.length > 0 ? (
                    <CalledsContainer>
                        <ButtonNewCalled onClick={() => navigate('/new')} style={{ alignSelf: 'flex-end' }}>
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

                                    <TableHeader style={{ textAlign: 'center' }}>
                                        #
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
                                            <LabelStatus $calledStatus={called.status}>{called.status}</LabelStatus>
                                        </TableData>

                                        <TableData>
                                            {format(new Date(called.createdAt * 1000), 'dd/MM/yyyy', { locale: ptBR })}
                                        </TableData>

                                        <TableData>
                                            <Buttons>
                                                <Button onClick={
                                                    () => {
                                                        setModalOpen(true)
                                                        setCalledModal(called)
                                                    }}
                                                    $backColor={'#3583F6'}
                                                >
                                                    <IoSearch />
                                                </Button>

                                                <Button onClick={() => navigate(`/new/${called.id}`)} $backColor={'#F6A935'}>
                                                    <LuPen />
                                                </Button>

                                                <Button onClick={() => handleDeleteCalled(called.id)} $backColor={'#FD441B'}>
                                                    <IoClose />
                                                </Button>
                                            </Buttons>
                                        </TableData>
                                        <Modal called={calledModal} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableContainer>
                    </CalledsContainer>
                ) : (
                    <WithoutCalledsContainer>
                        <Text>Nenhum chamado registrado...</Text>
                        <ButtonNewCalled onClick={() => navigate('/new')}>
                            <IoAdd /> Novo chamado
                        </ButtonNewCalled>
                    </WithoutCalledsContainer>
                )}
            </Container>
        </Screen>
    )
}