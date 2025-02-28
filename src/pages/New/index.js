import { IoAdd } from "react-icons/io5"
import { LuPen } from "react-icons/lu"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebaseConnection"
import { AppContext } from "../../contexts/app"
import { toast } from "react-toastify"

import Header from "../../components/Header"
import Title from "../../components/Title"
import SpinnerLoading from "../../components/Spinner"
import {
    Screen,
    Container,
    Label,
    ButtonSave
} from "../Settings/style"
import {
    TextArea,
    Select,
    Option,
    StatusContainer,
    RadioInput,
    RadioLabel
} from "./style"

export default function New() {
    const [clients, setClients] = useState([])
    const [clientSelect, setClientSelect] = useState('')
    const [subjectSelect, setSubjectSelect] = useState('')
    const [complement, setComplement] = useState('')
    const [statusSelected, setStatusSelected] = useState("");
    const [loading, setLoading] = useState(true)

    const subjects = ['Suporte', 'Visita Técnica', 'Financeiro']
    const status = ['Em Aberto', 'Em Progresso', 'Atendido']

    const { id } = useParams()

    const { user } = useContext(AppContext)

    const navigate = useNavigate()

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
                    setLoading(false)
                })
                .catch((err) => {
                    toast.error('Erro ao carregar a lista de clientes!')
                    console.log(err.code)
                    setLoading(false)
                })
        }

        loadClients()
    }, [user.uid])

    useEffect(() => {
        if (id) {
            async function loadCalled() {
                const docRef = doc(db, 'calleds', id)

                await getDoc(docRef)
                    .then((doc) => {
                        setClientSelect(doc.data().client)
                        setSubjectSelect(doc.data().subject)
                        setStatusSelected(doc.data().status)
                        setComplement(doc.data().complement)
                        setLoading(false)
                    })
                    .catch((err) => {
                        toast.error('Erro ao carregar o chamado!')
                        console.log(err.code)
                        setLoading(false)
                    })
            }

            loadCalled()
        }
    }, [id])

    async function handleAddCalled() {
        if (clientSelect === '' || subjectSelect === '' || statusSelected === '') {
            toast.warn('Selecione todas as opções!')
            return
        }

        const collectionRef = collection(db, 'calleds')

        await addDoc(collectionRef, {
            client: clientSelect,
            complement: complement,
            createdAt: new Date(),
            status: statusSelected,
            subject: subjectSelect,
            userUID: user.uid
        })
            .then(() => {
                toast.success('Chamado criado com sucesso!')
                setClientSelect('')
                setSubjectSelect('')
                setStatusSelected('')
                setComplement('')
            })
            .catch((err) => {
                toast.error('Erro ao criar o chamado!')
                console.log(err)
            })
    }

    async function handleEditCalled() {
        if (clientSelect === '' || subjectSelect === '' || statusSelected === '') {
            toast.warn('Selecione todas as opções!')
            return
        }

        const docRef = doc(db, 'calleds', id)

        await updateDoc(docRef, {
            client: clientSelect,
            complement: complement,
            status: statusSelected,
            subject: subjectSelect
        })
            .then(() => {
                toast.success('Chamado editado com sucesso!')
                setClientSelect('')
                setSubjectSelect('')
                setStatusSelected('')
                setComplement('')
                navigate('/dashboard')
            })
            .catch((err) => {
                toast.error('Erro ao editar o chamado!')
                console.log(err)
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
                <Title icon={id ? <LuPen /> : <IoAdd />} title={id ? 'Editando Chamado' : 'Novo Chamado'} />

                <Label>Cliente</Label>
                <Select
                    value={clientSelect}
                    onChange={(e) => setClientSelect(e.target.value)}
                >
                    <Option value={''}>Selecione uma opção...</Option>
                    {clients.map((client) => (
                        <Option key={client.id} value={client.name}>{client.name}</Option>
                    ))}
                </Select>

                <Label>Assunto</Label>
                <Select
                    value={subjectSelect}
                    onChange={(e) => setSubjectSelect(e.target.value)}
                >
                    <Option value={''}>Selecione uma opção...</Option>
                    {subjects.map((subject, index) => (
                        <Option key={index} value={subject}>{subject}</Option>
                    ))}
                </Select>

                <Label>Status</Label>
                <StatusContainer>
                    {status.map((option, index) => (
                        <RadioLabel key={index}>
                            <RadioInput
                                type="radio"
                                value={option}
                                checked={statusSelected === option}
                                onChange={(e) => setStatusSelected(e.target.value)}
                            />
                            {option}
                        </RadioLabel>
                    ))}
                </StatusContainer>

                <Label>Complemento</Label>
                <TextArea
                    placeholder="Descreva seu problema. (Opcional)"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                />

                <ButtonSave onClick={id ? handleEditCalled : handleAddCalled}>{id ? 'Editar' : 'Salvar'}</ButtonSave>
            </Container>
        </Screen>
    )
}