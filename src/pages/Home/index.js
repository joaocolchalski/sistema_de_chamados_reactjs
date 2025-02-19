import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/Header"

import {
    Container,
    ContainerHome,
    HeaderHome
} from "./style"

export default function Home() {
    return (
        <Container>
            <Header />
            <ContainerHome>
                <HeaderHome>

                </HeaderHome>
            </ContainerHome>
        </Container>
    )
}