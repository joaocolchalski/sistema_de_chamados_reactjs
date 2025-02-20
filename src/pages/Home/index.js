import { useContext } from "react"
import { AuthContext } from "../../contexts/app"
import { LuMessageCircle } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";

import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title
} from "../Settings/style";

import {
    WithoutCalledsContainer,
    Text,
    ButtonNewCalled
} from "./style";

export default function Home() {
    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuMessageCircle /> Atendimentos
                </Title>

                {/*<WithoutCalledsContainer>
                    <Text>Nenhum chamado registrado...</Text>
                    <ButtonNewCalled>
                        <IoAdd /> Novo chamado
                    </ButtonNewCalled>
                </WithoutCalledsContainer>*/}


            </Container>
        </Screen>
    )
}