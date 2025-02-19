import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth"

import {
    Container,
    Form,
    LogoContainer,
    LogoContainerImg,
    FormContainer,
    FormContainerInput,
    FormContainerButton,
    StyledLink
} from "./style"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignUp } = useContext(AuthContext)

    function SignUp(e) {
        e.preventDefault()
        handleSignUp(name, email, password)
    }

    return (
        <Container>
            <Form onSubmit={SignUp}>
                <LogoContainer className="logo-container">
                    <LogoContainerImg src={require("../../assets/logo-maior.png")} alt="Logo da Empresa" />
                </LogoContainer>

                <FormContainer className="form-container">
                    <FormContainerInput
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <FormContainerInput
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormContainerInput
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormContainerButton type="submit">Cadastrar</FormContainerButton>
                    <StyledLink to={'/'}>Já possuo uma conta</StyledLink>
                </FormContainer>
            </Form>
        </Container>
    )
}