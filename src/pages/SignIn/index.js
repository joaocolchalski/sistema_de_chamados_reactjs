import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/app"
import {
    Container,
    Form,
    LogoContainer,
    LogoContainerImg,
    FormContainer,
    FormContainerInput,
    FormContainerButton,
    StyledLink
} from "../SignUp/style"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { handleSignIn } = useContext(AuthContext)

    function SignIn(e) {
        e.preventDefault()
        handleSignIn(email, password)
    }

    return (
        <Container>
            <Form onSubmit={SignIn}>
                <LogoContainer >
                    <LogoContainerImg src={require("../../assets/logo-maior.png")} alt="Logo da Empresa" />
                </LogoContainer>

                <FormContainer>
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

                    <FormContainerButton type="submit">Acessar</FormContainerButton>
                    <StyledLink to={'/signup'}>Criar uma conta</StyledLink>
                </FormContainer>
            </Form>
        </Container>
    )
}