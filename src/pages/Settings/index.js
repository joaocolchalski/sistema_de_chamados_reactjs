import { useContext, useState } from "react";
import { LuSettings, LuUpload } from "react-icons/lu";
import { AppContext } from "../../contexts/app";

import Header from "../../components/Header"
import Title from "../../components/Title";
import {
    Screen,
    Content,
    Container,
    FormProfile,
    InputUploadPhotoSetting,
    LabelUploadPhotoSettings,
    Span,
    Label,
    Input,
    Button
} from "./style"

export default function Settings() {
    const { user, handleSignOut, handleUpdateName, handleUpdatePhotoUser, progressUpload, profilePhotoURL } = useContext(AppContext)
    const [name, setName] = useState(user.name)

    function updateName(e) {
        e.preventDefault()
        handleUpdateName(name)
    }

    return (
        <Screen>
            <Header />

            <Content>
                <Title icon={<LuSettings />} title={'Minha Conta'} />

                <Container>
                    <FormProfile onSubmit={updateName}>
                        <LabelUploadPhotoSettings htmlFor="file-upload" $photoURL={profilePhotoURL ? `${profilePhotoURL}` : require('../../assets/user.png')}>
                            <Span>
                                {progressUpload > 0 && progressUpload < 100 ? `${progressUpload.toFixed(0)}%` : <LuUpload />}
                            </Span>
                        </LabelUploadPhotoSettings>

                        <InputUploadPhotoSetting
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleUpdatePhotoUser}
                        />

                        <Label>Nome:</Label>
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Label>Email:</Label>
                        <Input
                            type="text"
                            value={user.email}
                            disabled={true}
                        />

                        <Button type="submit">Salvar</Button>
                    </FormProfile>
                </Container>

                <Container>
                    <Button onClick={handleSignOut}>Sair</Button>
                </Container>
            </Content>
        </Screen>
    )
}