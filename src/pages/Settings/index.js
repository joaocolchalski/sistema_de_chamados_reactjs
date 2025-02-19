import { useContext, useState } from "react";
import Header from "../../components/Header"
import {
    Container,
    ContainerSettings,
    HeaderSettings,
    ButtonUploadPhotoSettings,
    LabelSettings,
    InputSettings,
    ButtonSaveSettings,
    ButtonSignOut
} from "./style"

import { LuSettings, LuUpload } from "react-icons/lu";
import { AuthContext } from "../../contexts/auth";

export default function Settings() {
    const { user, handleSignOut } = useContext(AuthContext)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const photoURL = user?.photoURL ? user?.photoURL : require('../../assets/user.png')

    return (
        <Container>
            <Header />
            <ContainerSettings>
                <HeaderSettings>
                    <LuSettings /> Minha Conta
                </HeaderSettings>

                <ButtonUploadPhotoSettings photoURL={photoURL}>
                    <LuUpload />
                </ButtonUploadPhotoSettings>

                <LabelSettings>Nome:</LabelSettings>
                <InputSettings
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <LabelSettings>Email:</LabelSettings>
                <InputSettings
                    type="text"
                    value={email}
                    disabled={true}
                />

                <ButtonSaveSettings>Salvar</ButtonSaveSettings>

                <ButtonSignOut onClick={handleSignOut}>Sair</ButtonSignOut>
            </ContainerSettings>
        </Container>
    )
}