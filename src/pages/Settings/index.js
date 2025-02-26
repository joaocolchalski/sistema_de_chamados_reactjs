import { useContext, useState } from "react";
import { LuSettings, LuUpload } from "react-icons/lu";
import { AppContext } from "../../contexts/app";

import Header from "../../components/Header"
import {
    Screen,
    Container,
    Title,
    InputUploadPhotoSetting,
    LabelUploadPhotoSettings,
    Label,
    Input,
    ButtonSave,
    ButtonSignOut
} from "./style"

export default function Settings() {
    const { user, handleSignOut, handleUpdateName, handleUpdatePhotoUser, progressUpload, profilePhotoURL } = useContext(AppContext)
    const [name, setName] = useState(user.name)

    return (
        <Screen>
            <Header />

            <Container>
                <Title>
                    <LuSettings /> Minha Conta
                </Title>

                <LabelUploadPhotoSettings htmlFor="file-upload" $photoURL={profilePhotoURL ? `${profilePhotoURL}` : require('../../assets/user.png')}>
                    {progressUpload > 0 && progressUpload < 100 ? `${progressUpload.toFixed(0)}%` : <LuUpload />}
                </LabelUploadPhotoSettings>

                <InputUploadPhotoSetting
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleUpdatePhotoUser}
                    style={{ display: 'none' }}
                />

                <Label>Nome:</Label>
                <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Label>Email:</Label>
                <Input
                    id="input-email"
                    type="text"
                    value={user.email}
                    disabled={true}
                />

                <ButtonSave onClick={() => handleUpdateName(name)}>Salvar</ButtonSave>

                <ButtonSignOut onClick={handleSignOut}>Sair</ButtonSignOut>
            </Container>
        </Screen>
    )
}