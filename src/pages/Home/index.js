import { useContext } from "react"
import { AuthContext } from "../../contexts/app"
import Header from "../../components/Header"
import { LuMessageCircle } from "react-icons/lu";

import {
    Screen,
    Container,
    Title
} from "../Settings/style";

export default function Home() {
    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuMessageCircle /> Atendimentos
                </Title>
            </Container>
        </Screen>
    )
}