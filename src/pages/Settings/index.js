import { useContext, useState } from "react";
import Header from "../../components/Header"


import {
    Container,
    ContainerSettings,
    HeaderSettings,
    InputUploadPhotoSetting,
    ButtonUploadPhotoSettings,
    LabelSettings,
    InputSettings,
    ButtonSaveSettings,
    ButtonSignOut
} from "./style"

import { LuSettings, LuUpload } from "react-icons/lu";
import { AuthContext } from "../../contexts/auth";

export default function Settings() {
    const { user, handleSignOut, handleUpdateName } = useContext(AuthContext)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [image, setImage] = useState(null);

    const photoURL = user?.photoURL ? user?.photoURL : require('../../assets/user.png')

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Cria uma URL para visualizar a imagem
            setImage(imageUrl);
        }
    };

    return (
        <Container>
            <Header />
            <ContainerSettings>
                <HeaderSettings>
                    <LuSettings /> Minha Conta
                </HeaderSettings>

                <InputUploadPhotoSetting
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />

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
                    id="input-email"
                    type="text"
                    value={email}
                    disabled={true}
                />

                <ButtonSaveSettings onClick={() => handleUpdateName(name)}>Salvar</ButtonSaveSettings>

                <ButtonSignOut onClick={handleSignOut}>Sair</ButtonSignOut>
            </ContainerSettings>
        </Container>
    )
}