import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../contexts/app"
import { LuMessageCircle, LuPen } from "react-icons/lu";
import { IoAdd, IoClose, IoSearch } from "react-icons/io5";
import { query, where, orderBy, collection, doc, deleteDoc, limit, getDocs, startAfter } from "firebase/firestore";
import { db } from "../../firebaseConnection";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../../components/Header"
import Title from "../../components/Title";
import SpinnerLoading from "../../components/Spinner";
import {
    Screen,
    Content
} from "../Settings/style";
import {
    WithoutCalledsContainer,
    Text,
    ButtonNewCalled,
    TableContainer,
    TableBody,
    TableRow,
    TableHeader,
    TableData,
    LabelStatus,
    Buttons,
    Button,
    TableHead,
    ButtonMore
} from "./style";
import Modal from "../../components/Modal";

export default function Dashboard() {
    const [calleds, setCalleds] = useState([])
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false);
    const [calledModal, setCalledModal] = useState({})
    const [isEmpty, setIsEmpty] = useState(false)
    const [lastCalled, setLastCalled] = useState()
    const [loadingMore, setLoadingMore] = useState(false)

    const { user } = useContext(AppContext)

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCalleds() {
            const collectionRef = collection(db, 'calleds')

            const q = query(collectionRef, orderBy('createdAt', 'desc'), where('userUID', '==', user?.uid), limit(5))

            const querySnapshot = await getDocs(q)
            setCalleds([])

            await updateState(querySnapshot)

            setLoading(false)
        }

        loadCalleds()

        return () => { }
    }, [user?.uid])

    async function updateState(querySnapshot) {
        const isCollectionEmpty = querySnapshot.size === 0;

        if (!isCollectionEmpty) {
            let listCalleds = []

            querySnapshot.forEach((called) => {
                listCalleds.push({
                    id: called.id,
                    client: called.data().client,
                    complement: called.data().complement,
                    createdAt: called.data().createdAt.seconds,
                    status: called.data().status,
                    subject: called.data().subject
                })
            })

            const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]

            setCalleds(chamados => [...chamados, ...listCalleds])
            setLastCalled(lastDoc)
        } else {
            setIsEmpty(true)
        }

        setLoadingMore(false)
    }

    async function handleDeleteCalled(id) {
        const docRef = doc(db, 'calleds', id)
        await deleteDoc(docRef)
            .then(async () => {
                const collectionRef = collection(db, 'calleds')

                const q = query(collectionRef, orderBy('createdAt', 'desc'), where('userUID', '==', user?.uid), limit(calleds.length))

                const querySnapshot = await getDocs(q)
                setCalleds([])

                await updateState(querySnapshot)
                toast.success('Chamado deletado com sucesso!')
            })
            .catch((err) => {
                toast.error('Erro ao deletar o chamado!')
                console.log(err.code)
            })
    }

    async function handleMore() {
        setLoadingMore(true)

        const collectionRef = collection(db, 'calleds')

        const q = query(collectionRef, orderBy('createdAt', 'desc'), where('userUID', '==', user?.uid), startAfter(lastCalled), limit(5))

        const querySnapshot = await getDocs(q)

        await updateState(querySnapshot)
    }

    if (loading) {
        return (
            <SpinnerLoading />
        )
    }

    return (
        <Screen>
            <Header />

            <Content>
                <Title icon={<LuMessageCircle />} title={'Atendimentos'} />

                {calleds.length > 0 ? (
                    <>
                        <ButtonNewCalled onClick={() => navigate('/new')}>
                            <IoAdd /> Novo chamado
                        </ButtonNewCalled>

                        <TableContainer>
                            <TableHead>
                                <TableRow>
                                    <TableHeader scope="col">
                                        Cliente
                                    </TableHeader>

                                    <TableHeader scope="col">
                                        Assunto
                                    </TableHeader>

                                    <TableHeader scope="col">
                                        Status
                                    </TableHeader>

                                    <TableHeader scope="col">
                                        Cadastrado em
                                    </TableHeader>

                                    <TableHeader scope="col">
                                        #
                                    </TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {calleds.map((called) => (
                                    <TableRow key={called.id}>
                                        <TableData data-label={"Cliente"}>
                                            {called.client}
                                        </TableData>

                                        <TableData data-label={"Assunto"}>
                                            {called.subject}
                                        </TableData>

                                        <TableData data-label={"Status"}>
                                            <LabelStatus $calledStatus={called.status}>{called.status}</LabelStatus>
                                        </TableData>

                                        <TableData data-label={"Cadastrado"}>
                                            {format(new Date(called.createdAt * 1000), 'dd/MM/yyyy', { locale: ptBR })}
                                        </TableData>

                                        <TableData data-label={"#"}>
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
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableContainer>

                        {!loadingMore && !isEmpty &&
                            <ButtonMore onClick={handleMore}>
                                {loadingMore ? 'Buscando...' : 'Buscar Mais'}
                            </ButtonMore>
                        }
                    </>
                ) : (
                    <WithoutCalledsContainer>
                        <Text>Nenhum chamado registrado...</Text>
                        <ButtonNewCalled onClick={() => navigate('/new')}>
                            <IoAdd /> Novo chamado
                        </ButtonNewCalled>
                    </WithoutCalledsContainer>
                )}
            </Content >

            <Modal called={calledModal} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </Screen >
    )
}